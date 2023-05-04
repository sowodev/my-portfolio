import CardArticle from "./CardArticle";
import { NavLink } from "react-router-dom";
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

const PagesCardsArticles = function pagesCardsArticles({
  articles_data,
}: {
  articles_data: article_type[];
}) {
  const articles_per_page = 4;
  const [articles, setArticles] = useState<article_type[]>(
    articles_data.slice(
      0,
      articles_data.length > articles_per_page
        ? articles_per_page
        : articles_data.length
    )
  );
  const [cutStart, setCutStart] = useState(0);
  const [cutEnd, setcutEnd] = useState(articles_per_page);
  const [disableButton, setDisableButton] = useState(false);

  return (
    <div className="flex flex-col w-full h-full items-center gap-6">
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
      <div className="flex flex-col relative w-full justify-center items-center">
        <div className="flex flex-row fixed bottom-8 w-52 h-12">
          <button
            className={`flex w-52 h-full bg-gradient-to-b  from-sky-400 to-cyan-400 rounded shadow-lg justify-center items-center transition ease-linear duration-300 ${
              disableButton && "cursor-not-allowed"
            } hover:scale-110 hover:from-sky-500 hover:to-cyan-500`}
            onClick={() => {
              if (cutStart + articles_per_page >= articles_data.length) {
                setDisableButton(true);
              }
              setArticles((current) => [
                ...current,
                ...articles_data.slice(
                  cutStart + articles_per_page,
                  cutEnd + articles_per_page
                ),
              ]);
              setCutStart((current) => current + articles_per_page);
              setcutEnd((current) => current + articles_per_page);
            }}
            disabled={disableButton}
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
