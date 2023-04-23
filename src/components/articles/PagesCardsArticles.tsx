import CardArticle from "./CardArticle";
import { NavLink } from "react-router-dom";
import { ArticlesData } from "./ArticlesData";
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

const PagesCardsArticles = function pagesCardsArticles() {
  const number_of_articles = 4;
  const [cutStart, setCutStart] = useState(0);
  const [cutEnd, setcutEnd] = useState(number_of_articles);
  const [articles, setArticles] = useState(
    ArticlesData.slice(cutStart, cutEnd)
  );

  const [disableButton, setDisableButton] = useState(false);

  return (
    <div className="flex flex-col relative w-full h-full items-center gap-6 snap-y snap-mandatory">
      {articles.map((article, index) => {
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
            key={index}
            to={link}
            id={`component-${index}`}
            className="flex w-[85%] snap-center"
          >
            <CardArticle article={article} />
          </NavLink>
        );
      })}
      <div className="flex flex-row fixed bottom-8 w-52 h-12">
        <button
          className={`flex w-52 h-full bg-gradient-to-b from-sky-400 to-cyan-400 rounded-3xl shadow-lg justify-center items-center ${
            disableButton && "cursor-not-allowed"
          } hover:from-sky-500 hover:to-cyan-500`}
          onClick={() => {
            if (cutStart + number_of_articles >= ArticlesData.length) {
              setDisableButton(true);
            }
            setArticles((current) => [
              ...current,
              ...ArticlesData.slice(
                cutStart + number_of_articles,
                cutEnd + number_of_articles
              ),
            ]);
            setCutStart((current) => current + number_of_articles);
            setcutEnd((current) => current + number_of_articles);
          }}
          disabled={disableButton}
        >
          <span className="font-[Lexend] text-white text-lg">+ Show More</span>
        </button>
      </div>
    </div>
  );
};

export default PagesCardsArticles;
