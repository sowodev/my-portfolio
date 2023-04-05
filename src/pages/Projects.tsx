import Filters from "../components/commom/Filters";
import CardsPagesProjects from "../components/projects/cards-pages/CardsPagesProjects";

const Projects = function projects() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex relative h-full basis-1/4 justify-center">
        <Filters />
      </div>
      <div className="grid h-full basis-3/4 justify-start content-center">
        <CardsPagesProjects />
      </div>
    </div>
  );
};

export default Projects;
