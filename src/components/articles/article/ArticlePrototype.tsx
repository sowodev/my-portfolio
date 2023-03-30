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
    <div className="flex flex-row w-full overflow-auto">
      <div className="flex basis-1/4"></div>
      <div className="flex flex-col basis-2/4 gap-8">
        <div className="h-80 w-full">
          <img className="w-full h-full" src={article.img_path} alt="img" />
        </div>
        <p className="w-full">{article.title}</p>
        <p className="w-full">{article.leading}</p>
        <p className="w-full">{article.content}</p>
      </div>
      <div className="flex basis-1/4"></div>
    </div>
  );
};

export default ArticlePrototype;
