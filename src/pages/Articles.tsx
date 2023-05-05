import Filters from "../components/commom/Filters";
import PagesCardsArticles from "../components/articles/PagesCardsArticles";
import { ArticlesData } from "../components/articles/ArticlesData";
import { useState } from "react";
import useArticlesController from "../hooks/useArticles/useArticlesController";
import { ArticlesController } from "../interfaces/ArticlesInterfaces";

const Article = function articles() {
  const articles_controller: ArticlesController =
    useArticlesController(ArticlesData);
  return (
    <div className="flex flex-row w-full h-full overflow-scroll scroll-smooth">
      <div className="flex h-full basis-1/4 justify-center">
        <Filters articles_controller={articles_controller} />
      </div>
      <div className="flex h-fit basis-3/4">
        <div className="flex basis-2/3 justify-center items-center pt-8">
          <PagesCardsArticles articles_controller={articles_controller} />
        </div>
        <div className="flex h-full basis-1/3 justify-center"></div>
      </div>
    </div>
  );
};

export default Article;
