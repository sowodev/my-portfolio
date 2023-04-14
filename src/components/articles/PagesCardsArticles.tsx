import CardArticle from "./CardArticle";
import { NavLink } from "react-router-dom";
import { ArticlesData } from "./ArticlesData";
import ShowMoreArticlesBtn from "./ShowMoreArticles";

const PagesCardsArticles = function pagesCardsArticles() {
  return (
    <div className="flex flex-col relative w-full h-full items-center gap-6">
      {ArticlesData.map((article, index) => {
        const link =
          "/articles/" +
          article.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .replaceAll(" ", "-");

        return (
          <NavLink key={index} to={link} className="flex w-[85%] h-[9rem]">
            <CardArticle article={article} />
          </NavLink>
        );
      })}
      <div className="flex fixed bottom-8 w-52 h-12">
        <ShowMoreArticlesBtn />
      </div>
    </div>
  );
};

export default PagesCardsArticles;
