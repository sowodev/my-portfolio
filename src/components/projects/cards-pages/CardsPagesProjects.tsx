import CardProject from "./CardProject";
import { NavLink } from "react-router-dom";
import PaginationController from "../../commom/pagination-controller/PaginationController";
import {
  ProjectType,
  ProjectsController,
} from "../../../interfaces/MultiCardsIntetrfaces";

const CardsPagesProjects = function cardsPagesProjects({
  projects_controller,
}: {
  projects_controller: ProjectsController;
}) {
  return (
    <div className="flex h-full w-[72rem] flex-col gap-4 py-6">
      <div className="h-full w-full">
        {projects_controller.getFilteredProjectsLenght() > 0 ? (
          <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-8">
            {projects_controller
              .showingProjects(projects_controller.getCurrentPage() - 1)
              .map((project, index) => {
                const link: string = project.title
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/[^\w\s]/gi, "")
                  .trim()
                  .replaceAll(" ", "-");

                return (
                  <NavLink key={index} to={link}>
                    <CardProject key={index} project={project} />
                  </NavLink>
                );
              })}
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <p className="font-[Lexend] text-2xl text-[#333333ce] dark:text-slate-300">
              Ooops! No Projects Were Founded!
            </p>
          </div>
        )}
      </div>
      <div>
        <PaginationController projects_controller={projects_controller} />
      </div>
    </div>
  );
};

export default CardsPagesProjects;
