import CardProject from "./CardProject";
import { ProjectsData } from "../ProjectsData";
import { NavLink } from "react-router-dom";
import PaginationController from "../../commom/PaginationController";
import { useState } from "react";

const CardsPagesProjects = function cardsPagesProjects() {
  const [current_page, setCurrentPage] = useState(1);
  const [total_pages, setTotalPages] = useState(
    Math.ceil(ProjectsData.length / 8)
  );

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="grid grid-cols-4 grid-rows-2 gap-8 w-full h-full">
        {ProjectsData.map((project, index) => {
          const link: string =
            `/projects/${current_page}` +
            project.title
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
        total_pages={3}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CardsPagesProjects;
