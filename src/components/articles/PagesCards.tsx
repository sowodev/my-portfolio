import CardArticle from "./CardArticle";
import { NavLink } from "react-router-dom";
import { ArticilesData } from "./ArticlesData";

const PagesCards = function pagesCards() {
  return (
    <div className="flex flex-col w-[95%] h-[95%] justify-center items-center gap-6">
      {ArticilesData.map((article, index) => {
        const link =
          "/articles/" +
          article.title.toLowerCase().trim().replaceAll(" ", "-");

        return (
          <NavLink key={index} to={link} className="flex w-[92%] h-1/5">
            <CardArticle article={article} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default PagesCards;
