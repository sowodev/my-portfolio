type article_type = {
  img_path: string;
  title: string;
  leading: string;
  content: string;
  published_date: string;
  updated_date: string;
  tags: string[];
  author: string;
  img_credits: string;
};

const ArticlePrototype = function articlePrototype({
  article,
}: {
  article: article_type;
}) {
  return (
    <div className="flex flex-row w-full overflow-auto pt-12">
      <div className="flex basis-[25%]"></div>
      <div className="flex flex-col basis-[50%] gap-4" lang="pt-BR">
        <h1 className="w-full pt-8 text-5xl font-[Lexend] text-slate-700 hyphens-auto">
          {article.title}
        </h1>
        <h3 className="w-full pt-2 text-lg font-[Lexend] font-light text-slate-500 hyphens-auto">
          {article.leading}
        </h3>
        <div className="flex flex-row w-full gap-5 justify-center font-[Lexend] font-light text-sky-300 text-sm">
          {article.tags.map((current, index) => {
            return <span key={index}>{current}</span>;
          })}
        </div>
        <div className="flex flex-col w-full gap-2">
          <hr className="my-4 text-orange-400" />
          <img
            className="w-full aspect-video"
            src={article.img_path}
            alt="img"
          />
          <span className="text-sm text-gray-400 font-light">
            {article.img_credits}
          </span>
          <hr />
        </div>
        <div className="flex flex-col w-full justify-between font-[Lexend] font-light text-slate-400 text-xs">
          <span className="text-base text-slate-700">By: {article.author}</span>
          <span>Published: {article.published_date}</span>
          <span>Updated: {article.updated_date}</span>
        </div>
        <p className="w-full py-8 font-[Lexend] font-light">
          {article.content}
        </p>
      </div>
      <div className="flex basis-[25%]"></div>
    </div>
  );
};

export default ArticlePrototype;
