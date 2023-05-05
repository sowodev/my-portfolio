import CardArticle from "./CardArticle";
import { NavLink } from "react-router-dom";
import { ArticlesController } from "../../interfaces/ArticlesInterfaces";

const PagesCardsArticles = function pagesCardsArticles({
  articles_controller,
}: {
  articles_controller: ArticlesController;
}) {
  return (
    <div className="flex flex-col w-full h-full items-center gap-6">
      {articles_controller.showingArticles().map((article, index) => {
        const link =
          "/articles/" +
          article.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .replaceAll(" ", "-");
        return (
          <div className="flex w-[85%] snap-center">
            <NavLink key={index} to={link} className="w-full ">
              <CardArticle article={article} />
            </NavLink>
          </div>
        );
      })}
      <div className="flex flex-col relative w-full justify-center items-center">
        <div className="flex flex-row fixed bottom-8 w-52 h-12">
          <button
            className={`flex w-52 h-full bg-gradient-to-b  from-sky-400 to-cyan-400 rounded shadow-lg justify-center items-center transition ease-linear duration-300 ${
              articles_controller.checkDisabledBtn() && "cursor-not-allowed"
            } hover:scale-110 hover:from-sky-500 hover:to-cyan-500`}
            onClick={() => articles_controller.addMoreArticles()}
            disabled={articles_controller.checkDisabledBtn()}
          >
            <span className="font-[Lexend] text-white text-lg">
              + Show More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagesCardsArticles;
