import Filters from "../components/commom/Filters";
import CardsPagesProjects from "../components/projects/cards-pages/CardsPagesProjects";

const Projects = function projects() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex relative h-full basis-1/4 justify-center">
        <Filters />
      </div>
      <div className="flex h-full basis-3/4 bg-orange-300 justify-center items-center">
        <CardsPagesProjects />
      </div>
    </div>
  );
};

export default Projects;
