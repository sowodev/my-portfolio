import CardArticle from "./CardArticle";
import { NavLink } from "react-router-dom";
import { ArticlesData } from "./ArticlesData";

const PagesCardsArticles = function pagesCardsArticles() {
  return (
    <div className="flex flex-col w-[95%] h-full justify-center items-center gap-6">
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
          <NavLink key={index} to={link} className="flex w-[90%] h-[9rem]">
            <CardArticle article={article} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default PagesCardsArticles;
