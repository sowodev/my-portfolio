import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import React, { useState, ReactElement } from "react";

// The code was Writen by Sowodin (Wendell Oliveira).

type Props = {
  current_page: number;
  total_pages: number;
  setCurrentPage: (page_number: number) => void;
};

type BtnProps = {
  page_number: number;
  current_page: number;
  total_pages: number;
  icon?: ReactElement;
  chevron_direction?: "left" | "right";
  handlePageChange: (page_number: number) => void;
};

const PaginationBtn: React.FC<BtnProps> = ({
  page_number,
  current_page,
  total_pages,
  icon,
  chevron_direction,
  handlePageChange,
}) => {
  const display_element: ReactElement | number = icon ? icon : page_number;
  const name_of_class: string = icon
    ? chevron_direction === "left"
      ? `flex h-8 w-10 rounded justify-center items-center ${
          current_page === 1
            ? "bg-slate-200 cursor-not-allowed dark:bg-slate-500"
            : "hover:bg-slate-100 dark:hover:bg-slate-700"
        }`
      : `flex h-8 w-10 rounded justify-center items-center ${
          current_page === total_pages
            ? "bg-gray-200 cursor-not-allowed dark:bg-slate-500"
            : "hover:bg-gray-100 dark:hover:bg-slate-700"
        }`
    : `flex h-8 w-10 font-[Lexend] font-light text-sm rounded justify-center items-center ${
        current_page === page_number
          ? "bg-gradient-to-b from-sky-300 to-cyan-300 text-white cursor-not-allowed dark:text-slate-800 dark:from-sky-400 dark:to-cyan-400"
          : "hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-700"
      }`;

  return (
    <>
      {" "}
      {(page_number === 2 && current_page > 4 && total_pages > 7) ||
      (page_number === total_pages - 1 &&
        current_page < total_pages - 3 &&
        total_pages > 7) ? (
        <EllipsisHorizontalIcon className="h-8 w-10 stroke-slate-300 dark:stroke-slate-500" />
      ) : (
        <button
          className={name_of_class}
          disabled={
            chevron_direction === "left" && current_page === 1
              ? true
              : chevron_direction === "right" && current_page === total_pages
              ? true
              : current_page === page_number
          }
          onClick={() => {
            chevron_direction === "left"
              ? handlePageChange(current_page - 1)
              : chevron_direction === "right"
              ? handlePageChange(current_page + 1)
              : handlePageChange(page_number);
          }}
        >
          {display_element}
        </button>
      )}
    </>
  );
};

const PaginationController: React.FC<Props> = ({
  current_page,
  total_pages,
  setCurrentPage,
}) => {
  const [middle_page, setMiddlePage] = useState<number>(4);

  const array_of_pages_btns: number[] = [];
  function arrayFiller(iteration: number) {
    for (let index = 0; index < iteration; index++)
      array_of_pages_btns.push(index + 1);
  }

  if (total_pages < 8) {
    arrayFiller(total_pages);
  } else {
    arrayFiller(7);
  }

  const handlePageChange = (page_number: number) => {
    setCurrentPage(page_number);

    if (total_pages > 7) {
      if (page_number >= 4 && page_number <= total_pages - 3) {
        setMiddlePage(page_number);
      } else if (page_number < 4) {
        setMiddlePage(4);
      } else if (page_number > total_pages - 3) {
        setMiddlePage(total_pages - 3);
      }
    }
  };

  function setPageNumber(page_number: number): number {
    if (total_pages > 7) {
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
          return total_pages - 1;
        case 7:
          return total_pages;
        default:
          return 0;
      }
    } else {
      return page_number;
    }
  }

  return (
    <div className="flex flex-row h-12 justify-center items-center gap-2 my-2">
      <PaginationBtn
        page_number={0}
        current_page={current_page}
        total_pages={total_pages}
        icon={
          <ChevronLeftIcon className="h-5 w-5 stroke-[#333333ce] pointer-events-none dark:stroke-slate-300" />
        }
        chevron_direction="left"
        handlePageChange={handlePageChange}
      />

      {array_of_pages_btns.map((btn_page_number, index) => {
        return (
          <PaginationBtn
            key={index}
            page_number={setPageNumber(btn_page_number)}
            current_page={current_page}
            total_pages={total_pages}
            handlePageChange={handlePageChange}
          />
        );
      })}

      <PaginationBtn
        page_number={0}
        current_page={current_page}
        total_pages={total_pages}
        icon={
          <ChevronRightIcon className="h-5 w-5 stroke-[#333333ce] pointer-events-none dark:stroke-slate-300" />
        }
        chevron_direction="right"
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationController;
