import { useState } from "react";
import TagsList from "./TagsList";
import TextCard from "./TextCard";
import { article_type } from "../../interfaces/MultiCardsIntetrfaces";

const CardArticle = function cardArticle({
  article,
}: {
  article: article_type;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex flex-row w-full h-[9rem] ring-1 ring-[#d8d8d8] shadow-md rounded hover:bg-slate-100 dark:ring-slate-500 dark:hover:bg-slate-700 dark:shadow-slate-600">
      <div
        className={
          imgLoaded ? "h-full w-1/4" : "h-full w-1/4 bg-gray-300 animate-pulse"
        }
      >
        <img
          className="h-full w-full rounded-l"
          src={article.img_path}
          alt="img"
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <div className="flex flex-col h-full w-3/4">
        <div className="flex w-full h-4/5 justify-center items-center">
          <TextCard title={article.title} leading={article.leading} />
        </div>
        <div className="flex flex-row w-full h-1/5 justify-end items-center">
          <TagsList tags={article.tags} />
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
