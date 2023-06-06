import { ProjectsController } from "../interfaces/MultiCardsIntetrfaces";
import Filters from "../components/commom/filters/Filters";
import CardsPagesProjects from "../components/projects/cards-pages/CardsPagesProjects";

const Projects = function projects({
  projects_controller,
}: {
  projects_controller: ProjectsController;
}) {
  return (
    <div className="flex h-full w-full flex-row">
      <div className="hidden lg:flex h-full basis-1/4 justify-center">
        <Filters multi_card_controller={projects_controller} />
      </div>
      <div className="flex h-fit lg:h-full w-full lg:basis-3/4 items-center justify-center lg:justify-start">
        <CardsPagesProjects projects_controller={projects_controller} />
      </div>
    </div>
  );
};

export default Projects;
