import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { ProjectsController } from "../../../interfaces/MultiCardsIntetrfaces";
import PaginationBtn from "./PaginationBtn";

// The code was Writen by Sowodin (Wendell Oliveira).

type Props = {
  projects_controller: ProjectsController;
};

/* 
Projects Controller must provide:

 - The current page number: `typeof<number>`
 - The total number of pages: `typeof<number>`
 - The function to change the current page: `typeof<(page: number) => void>`

*/

const PaginationController: React.FC<Props> = ({ projects_controller }) => {
  const [middle_page, setMiddlePage] = useState<number>(4);

  const array_of_pages_btns: number[] = [];
  function arrayFiller(iteration: number) {
    for (let index = 0; index < iteration; index++)
      array_of_pages_btns.push(index + 1);
  }

  if (projects_controller.getTotalPages() < 8) {
    arrayFiller(projects_controller.getTotalPages());
  } else {
    arrayFiller(7);
  }

  useEffect(() => {
    handlePageChange(1);
  }, [projects_controller.getTotalPages()]);

  const handlePageChange = (page_number: number) => {
    projects_controller.setCurrentPageState(page_number);

    if (projects_controller.getTotalPages() > 7) {
      if (
        page_number >= 4 &&
        page_number <= projects_controller.getTotalPages() - 3
      ) {
        setMiddlePage(page_number);
      } else if (page_number < 4) {
        setMiddlePage(4);
      } else if (page_number > projects_controller.getTotalPages() - 3) {
        setMiddlePage(projects_controller.getTotalPages() - 3);
      }
    }
  };

  const setPageNumber = (page_number: number): number => {
    if (projects_controller.getTotalPages() > 7) {
      switch (page_number) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return middle_page - 1;
        case 4:
          return middle_page;
        case 5:
          return middle_page + 1;
        case 6:
          return projects_controller.getTotalPages() - 1;
        case 7:
          return projects_controller.getTotalPages();
        default:
          return 0;
      }
    } else {
      return page_number;
    }
  };

  return (
    <div className="my-2 flex h-12 flex-row items-center justify-center gap-2">
      <PaginationBtn
        page_number={0}
        current_page={projects_controller.getCurrentPage()}
        total_pages={projects_controller.getTotalPages()}
        icon={
          <ChevronLeftIcon className="pointer-events-none h-5 w-5 stroke-[#333333ce] dark:stroke-slate-300" />
        }
        chevron_direction="left"
        handlePageChange={handlePageChange}
      />

      {array_of_pages_btns.map((btn_page_number: number, index: number) => {
        return (
          <PaginationBtn
            key={index}
            page_number={setPageNumber(btn_page_number)}
            current_page={projects_controller.getCurrentPage()}
            total_pages={projects_controller.getTotalPages()}
            handlePageChange={handlePageChange}
          />
        );
      })}

      <PaginationBtn
        page_number={0}
        current_page={projects_controller.getCurrentPage()}
        total_pages={projects_controller.getTotalPages()}
        icon={
          <ChevronRightIcon className="pointer-events-none h-5 w-5 stroke-[#333333ce] dark:stroke-slate-300" />
        }
        chevron_direction="right"
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationController;
