import { ProjectsController } from "../interfaces/MultiCardsIntetrfaces";
import Filters from "../components/commom/filters/Filters";
import CardsPagesProjects from "../components/projects/cards-pages/CardsPagesProjects";

const Projects = function projects({
  projects_controller,
}: {
  projects_controller: ProjectsController;
}) {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex relative h-full basis-1/4 justify-center">
        <Filters multi_card_controller={projects_controller} />
      </div>
      <div className="flex h-full basis-3/4 justify-start items-center">
        <CardsPagesProjects projects_controller={projects_controller} />
      </div>
    </div>
  );
};

export default Projects;
