import { NavLink } from "react-router-dom";
import { article_type } from "../../../interfaces/ArticlesInterfaces";

interface Props {
  article: article_type;
}

const NextArticleCard: React.FC<Props> = ({ article }) => {
  const link =
    "/articles/" +
    article.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .replaceAll(" ", "-");

  return (
    <NavLink
      to={link}
      className="flex flex-col w-[23%] h-[85%] rounded shadow-md bg-white transition ease-linear duration-200 hover:bg-slate-200 hover:scale-105 dark:bg-slate-800 dark:hover:bg-slate-700 dark:shadow-slate-600"
    >
      <div className="w-full h-1/2">
        <img
          className="w-full h-full object-cover rounded-t"
          src={article.img_path}
          alt={article.title}
        />
      </div>
      <div className="flex w-full h-1/2 p-4 items-center">
        <span className="text-slate-700 font-[Lexend] text-center line-clamp-5 hyphens-auto dark:text-slate-300">
          {article.title}
        </span>
      </div>
    </NavLink>
  );
};

export default NextArticleCard;
