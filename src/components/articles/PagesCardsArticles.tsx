import CardArticle from "./CardArticle";
import { NavLink } from "react-router-dom";
import { ArticlesData } from "./ArticlesData";

const PagesCardsArticles = function pagesCardsArticles() {
  return (
    <div className="flex flex-col relative w-full h-full justify-center items-center gap-6">
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
      <div className="flex absolute bottom-6 w-36 h-12 bg-sky-300"></div>
    </div>
  );
};

export default PagesCardsArticles;
