import Filters from "../components/articles/Filters";
import PagesCardsArticles from "../components/articles/PagesCardsArticles";

const Article = function articles() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex relative h-full basis-1/4 justify-center">
        <Filters />
      </div>
      <div className="flex h-full basis-2/4 justify-center items-center">
        <PagesCardsArticles />
      </div>
      <div className="flex h-full basis-1/4 justify-center"></div>
    </div>
  );
};

export default Article;
