import Filters from "../components/commom/filters/Filters";
import PagesCardsArticles from "../components/articles/PagesCardsArticles";
import useArticlesController from "../components/articles/hooks/useArticlesController";
import { ArticlesController, PostsType } from "../utils/MultiCardsIntetrfaces";

const Article = function articles({
  ArticlesData,
}: {
  ArticlesData: PostsType[];
}) {
  const articles_controller: ArticlesController =
    useArticlesController(ArticlesData);

  return (
    <div className="flex h-full w-full flex-row overflow-scroll scroll-smooth">
      <div className="h-full basis-0 lg:basis-1/4 justify-center hidden lg:flex">
        <Filters multi_card_controller={articles_controller} />
      </div>
      <div className="flex h-fit basis-full lg:basis-3/4 justify-center">
        <div className="flex basis-full lg:basis-2/3 items-center justify-center pt-8">
          <PagesCardsArticles articles_controller={articles_controller} />
        </div>
        <div className="flex h-full basis-0 lg:basis-1/3 justify-center"></div>
      </div>
    </div>
  );
};

export default Article;
