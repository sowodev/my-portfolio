import Filters from "../components/commom/Filters";
import PagesCardsArticles from "../components/articles/PagesCardsArticles";
import { ArticlesData } from "../components/articles/ArticlesData";
import { useState } from "react";

type article_type = {
  img_path: string;
  title: string;
  leading: string;
  content_path: string;
  published_date: string;
  updated_date: string;
  tags: string[];
  author: string;
  img_credits: string;
};

const Article = function articles() {
  const [filtered_articles, setFilteredArticles] =
    useState<article_type[]>(ArticlesData);

  return (
    <div className="flex flex-row w-full h-full overflow-scroll scroll-smooth">
      <div className="flex h-full basis-1/4 justify-center">
        <Filters
          articles={filtered_articles}
          setFilteredArticles={setFilteredArticles}
        />
      </div>
      <div className="flex h-fit basis-3/4">
        <div className="flex basis-2/3 justify-center items-center pt-8">
          <PagesCardsArticles articles_data={filtered_articles} />
        </div>
        <div className="flex h-full basis-1/3 justify-center"></div>
      </div>
    </div>
  );
};

export default Article;
