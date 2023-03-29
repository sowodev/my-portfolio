import Card from "./Card";
import { NavLink } from "react-router-dom";
import { ArticilesData } from "./ArticlesData";

const PagesCards = function pagesCards() {
  return (
    <div className="flex flex-col w-[95%] h-[95%] justify-center items-center gap-6">
      {ArticilesData.map((article, index) => {
        const link = "/articles/" + article.title.toLowerCase();

        return (
          <NavLink key={index} to={link} className="flex w-[92%] h-1/5">
            <Card article={article} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default PagesCards;
