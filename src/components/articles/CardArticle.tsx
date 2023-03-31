import TagsList from "./TagsList";
import TextCard from "./TextCard";

const CardArticle = function cardArticle({
  article,
}: {
  article: {
    img_path: string;
    title: string;
    leading: string;
    content: string;
    date: string;
    tags: string[];
  };
}) {
  return (
    <div className="flex flex-row w-full h-full ring-1 ring-[#d8d8d8] shadow-md hover:bg-gray-100 rounded">
      <div className="h-full w-1/4 text-center">
        <img
          className="h-full w-full rounded-l"
          src={article.img_path}
          alt=""
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
