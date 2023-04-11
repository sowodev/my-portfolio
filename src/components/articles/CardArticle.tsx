import { useState } from "react";
import TagsList from "./TagsList";
import TextCard from "./TextCard";

const CardArticle = function cardArticle({
  article,
}: {
  article: {
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
}) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex flex-row w-full h-full ring-1 ring-[#d8d8d8] shadow-md rounded hover:bg-gray-100">
      <div
        className={
          imgLoaded ? "h-full w-1/4" : "h-full w-1/4 bg-gray-300 animate-pulse"
        }
      >
        <img
          className="h-full w-full rounded-l"
          src={article.img_path}
          alt="img"
          onLoad={() => setImgLoaded((c) => !c)}
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
