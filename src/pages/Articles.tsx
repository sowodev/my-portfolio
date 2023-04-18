import Filters from "../components/commom/Filters";
import PagesCardsArticles from "../components/articles/PagesCardsArticles";

const Article = function articles() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex h-full basis-1/4 justify-center">
        <Filters />
      </div>
      <div className="flex h-full basis-3/4 overflow-scroll scroll-smooth">
        <div className="flex basis-2/3 justify-center items-center pt-8">
          <PagesCardsArticles />
        </div>
        <div className="flex h-full basis-1/3 justify-center"></div>
      </div>
    </div>
  );
};

export default Article;
