import { useState } from "react";
import ReactMarkdown from "react-markdown";

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

const ArticlePrototype = function articlePrototype({
  article,
}: {
  article: article_type;
}) {
  const [markdown_content, setMarkdownContent] = useState("");

  fetch(article.content_path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch markdown file: ${response.status} ${response.statusText}`
        );
      }
      return response.text();
    })
    .then((markdownContent) => {
      setMarkdownContent(markdownContent);
      console.log(markdownContent);
    })
    .catch((error) => {
      console.error(`Error fetching markdown file: ${error.message}`);
    });
  return (
    <div className="flex flex-row w-full overflow-auto pt-12">
      <div className="flex basis-[25%]"></div>
      <div className="flex flex-col basis-[50%] gap-4" lang="pt-BR">
        <h1 className="w-full pt-8 text-5xl text-center font-[Lexend] text-slate-700 hyphens-auto">
          {article.title}
        </h1>
        <h3 className="w-full pt-2 text-lg text-center font-[Lexend] font-light text-slate-500 hyphens-auto">
          {article.leading}
        </h3>
        <div className="flex flex-row w-full gap-5 justify-center font-[Lexend] font-light text-sky-500 text-sm">
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
        <div className="flex flex-row w-full font-[Lexend] font-light text-slate-400 text-xs justify-start">
          <div className="w-16 h-16">
            <img src="/src/assets/imgs/user.svg" alt="" />
          </div>
          <div className="flex flex-col h-full w-fit">
            <span className="text-base text-slate-700 w-fit">
              {article.author}
            </span>
            <span className="w-fit">Published: {article.published_date}</span>
            <span className="w-fit">Updated: {article.updated_date}</span>
          </div>
        </div>
        <div className="prose prose-slate mx-auto lg:prose-xl">
          <ReactMarkdown children={markdown_content} />
        </div>
      </div>
      <div className="flex basis-[25%]"></div>
    </div>
  );
};

export default ArticlePrototype;
