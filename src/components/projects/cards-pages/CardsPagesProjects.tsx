import CardProject from "./CardProject";
import { ProjectsData, Project } from "../ProjectsData";
import { NavLink } from "react-router-dom";
import PaginationController from "../../commom/PaginationController";
import { useState } from "react";

function sliceDataIntoArrays(): Project[][] {
  const array_of_arrays: Project[][] = [];

  for (let i = 0; i < ProjectsData.length; i += 8)
    array_of_arrays.push(ProjectsData.slice(i, i + 8));

  return array_of_arrays;
}

const CardsPagesProjects = function cardsPagesProjects() {
  const [current_page, setCurrentPage] = useState<number>(1);
  const [total_pages, setTotalPages] = useState<number>(
    Math.ceil(ProjectsData.length / 8)
  );
  const [arrays_of_projects, setArraysOfProjects] = useState<Project[][]>(
    sliceDataIntoArrays()
  );

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="grid grid-cols-4 grid-rows-2 gap-8 w-full h-full">
        {arrays_of_projects[current_page - 1].map((project, index) => {
          const link: string = project.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .replaceAll(" ", "-");

          return (
            <NavLink key={index} to={link}>
              <CardProject key={index} project={project} />
            </NavLink>
          );
        })}
      </div>
      <PaginationController
        current_page={current_page}
        total_pages={total_pages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CardsPagesProjects;
