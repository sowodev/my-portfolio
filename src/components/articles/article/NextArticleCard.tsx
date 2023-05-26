import { NavLink } from "react-router-dom";
import { ArticleType } from "../../../interfaces/MultiCardsIntetrfaces";

interface Props {
  article: ArticleType;
}

const NextArticleCard: React.FC<Props> = ({ article }) => {
  const link =
    "/articles/" +
    article.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replaceAll(" ", "-");

  return (
    <NavLink
      to={link}
      className="flex h-[85%] w-[23%] flex-col rounded bg-white shadow-md transition duration-200 ease-linear hover:scale-105 hover:bg-slate-200 dark:bg-slate-800 dark:shadow-slate-600 dark:hover:bg-slate-700"
    >
      <div className="h-1/2 w-full">
        <img
          className="h-full w-full rounded-t object-cover"
          src={article.img_path}
          alt={article.title}
        />
      </div>
      <div className="flex h-1/2 w-full items-center p-4">
        <span className="line-clamp-5 text-center font-[Lexend] text-slate-700 hyphens-auto dark:text-slate-300">
          {article.title}
        </span>
      </div>
    </NavLink>
  );
};

export default NextArticleCard;
