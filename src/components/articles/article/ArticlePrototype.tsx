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
    })
    .catch((error) => {
      console.error(`Error fetching markdown file: ${error.message}`);
    });
  return (
    <div className="flex flex-row w-full h-full overflow-auto pt-12">
      <div className="flex basis-[25%]"></div>
      <div className="flex flex-col h-fit basis-[50%] gap-4" lang="pt-BR">
        <h1 className="w-full text-5xl text-center font-[Lexend] text-slate-700 hyphens-auto dark:text-white">
          {article.title}
        </h1>
        <h3 className="w-full pt-2 text-lg text-center font-[Lexend] font-light text-slate-500 hyphens-auto dark:text-slate-300">
          {article.leading}
        </h3>
        <div className="flex flex-row w-full gap-5 justify-center font-[Lexend] font-light text-sky-500 text-sm">
          {article.tags.map((current, index) => {
            return <span key={index}>{current}</span>;
          })}
        </div>
        <div className="flex flex-col w-full">
          <hr className="my-4 dark:border-slate-500" />
          <img
            className="w-full aspect-video"
            src={article.img_path}
            alt="img"
          />
          <span className="text-sm text-gray-400 font-light mt-2">
            {article.img_credits}
          </span>
          <hr className="my-4 dark:border-slate-500" />
        </div>
        <div className="flex flex-row w-full font-[Lexend] font-light text-slate-400 text-xs justify-start">
          <div className="w-16 h-16">
            <img src="/src/assets/imgs/user.svg" alt="" />
          </div>
          <div className="flex flex-col h-full w-fit">
            <span className="text-base text-slate-700 w-fit dark:text-white">
              {article.author}
            </span>
            <span className="w-fit dark:text-slate-300">
              Published: {article.published_date}
            </span>
            <span className="w-fit dark:text-slate-300">
              Updated: {article.updated_date}
            </span>
          </div>
        </div>
        <div className="prose prose-slate mx-auto pb-8 lg:prose-xl dark:prose-invert">
          <ReactMarkdown children={markdown_content} />
        </div>
        <div className="flex w-full h-96 my-8 bg-white rounded"></div>
      </div>
      <div className="flex basis-[25%]"></div>
    </div>
  );
};

export default ArticlePrototype;
