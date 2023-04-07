import CardProject from "./CardProject";
import { ProjectsData } from "../ProjectsData";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";

const CardsPagesProjects = function cardsPagesProjects() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-8 w-full h-full">
      {ProjectsData.map((project, index) => {
        const link =
          "/projects/" +
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
  );
};

export default CardsPagesProjects;
