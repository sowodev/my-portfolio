import { useState } from "react";
import TagsList from "./TagsList";
import TextCard from "./TextCard";
import { ArticleType } from "../../interfaces/MultiCardsIntetrfaces";

const CardArticle = function cardArticle({
  article,
}: {
  article: ArticleType;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex h-full md:h-[11rem] lg:h-[9rem] w-full flex-col md:flex-row rounded shadow-md ring-1 ring-[#d8d8d8] hover:bg-slate-100 dark:shadow-slate-600 dark:ring-slate-500 dark:hover:bg-slate-700">
      <div
        className={
          imgLoaded
            ? "h-[55%] w-full md:w-1/3 md:h-full lg:w-1/4 object-cover aspect-video"
            : "h-[55%] w-full md:w-1/3 md:h-full lg:w-1/4 animate-pulse bg-gray-300"
        }
      >
        <img
          className="h-full w-full rounded-t md:rounded-l"
          src={article.img_path}
          alt=""
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <div className="flex h-[45%] w-full md:h-full md:w-3/4 flex-col">
        <div className="flex h-[85%] w-full items-center justify-center">
          <TextCard title={article.title} leading={article.leading} />
        </div>
        <div className="flex h-[15%] w-full flex-row items-center justify-center lg:justify-end">
          <TagsList tags={article.tags} />
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
