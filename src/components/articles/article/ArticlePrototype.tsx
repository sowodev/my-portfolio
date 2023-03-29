const ArticlePrototype = function articlePrototype({
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
  return <h1 className="w-full h-full">{article.title}</h1>;
};

export default ArticlePrototype;
