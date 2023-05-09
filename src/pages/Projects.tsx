import { ArticlesData } from "../components/articles/ArticlesData";
import Filters from "../components/commom/Filters";
import CardsPagesProjects from "../components/projects/cards-pages/CardsPagesProjects";
import useArticlesController from "../hooks/useArticles/useArticlesController";

const Projects = function projects() {
  const articles_controller = useArticlesController(ArticlesData);

  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex relative h-full basis-1/4 justify-center">
        <Filters articles_controller={articles_controller} />
      </div>
      <div className="grid h-full basis-3/4 justify-start content-center">
        <CardsPagesProjects />
      </div>
    </div>
  );
};

export default Projects;
