type article_type = {
  img_path: string;
  title: string;
  leading: string;
  content: string;
  date: string;
  tags: string[];
};

const ArticlePrototype = function articlePrototype({
  article,
}: {
  article: article_type;
}) {
  return (
    <div className="flex flex-row w-full overflow-auto pt-12">
      <div className="flex basis-[30%]"></div>
      <div className="flex flex-col basis-[40%] gap-8" lang="pt-BR">
        <h1 className="w-full pt-8 text-5xl font-[Lexend] text-slate-700 hyphens-auto">
          {article.title}
        </h1>
        <h3 className="w-full pt-8 text-lg font-[Lexend] text-light text-slate-500 hyphens-auto">
          {article.leading}
        </h3>
        <div className="w-full">
          <img
            className="w-full aspect-video"
            src={article.img_path}
            alt="img"
          />
        </div>
        <p className="w-full">{article.content}</p>
      </div>
      <div className="flex basis-[30%]"></div>
    </div>
  );
};

export default ArticlePrototype;
