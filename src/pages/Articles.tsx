import Filters from "../components/articles/Filters";
import PagesCards from "../components/articles/PagesCards";

const Article = function articles() {
  return (
    <div className="flex flex-row w-full h-full bg-red-300">
      <div className="flex relative h-full basis-1/4 bg-sky-300 justify-center">
        <Filters />
      </div>
      <div className="flex h-full basis-2/4 bg-cyan-300 justify-center items-center">
        <PagesCards />
      </div>
      <div className="flex h-full basis-1/4 bg-green-300 justify-center"></div>
    </div>
  );
};

export default Article;
