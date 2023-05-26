import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArticleType } from "../../../interfaces/MultiCardsIntetrfaces";
import NextArticleCard from "./NextArticleCard";

const ArticlePrototype = function articlePrototype({
  ArticlesData,
  article,
}: {
  ArticlesData: ArticleType[];
  article: ArticleType;
}) {
  const [markdown_content, setMarkdownContent] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [markdown_content]);

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
    <div
      className="flex h-full w-full flex-row overflow-scroll pt-12 "
      ref={contentRef}
    >
      <div className="flex basis-[25%]"></div>
      <div className="flex h-fit basis-[50%] flex-col gap-4" lang="pt-BR">
        <h1 className="w-full text-center font-[Lexend] text-5xl hyphens-auto dark:text-white">
          {article.title}
        </h1>
        <h3 className="w-full pt-2 text-center font-[Lexend] text-lg font-light text-slate-500 hyphens-auto dark:text-slate-300">
          {article.leading}
        </h3>
        <div className="flex w-full flex-row justify-center gap-5 font-[Lexend] text-sm font-light text-sky-500">
          {article.tags.map((current, index) => {
            return (
              <span key={index}>
                {current.length > 10 ? current.slice(0, 9) + "..." : current}
              </span>
            );
          })}
        </div>
        <div className="flex w-full flex-col">
          <hr className="my-4 dark:border-slate-500" />
          <img
            className="aspect-video w-full"
            src={article.img_path}
            alt="img"
          />
          <span className="mt-2 text-sm font-light text-gray-400">
            {article.img_credits}
          </span>
          <hr className="my-4 dark:border-slate-500" />
        </div>
        <div className="flex w-full flex-row justify-start font-[Lexend] text-xs font-light text-slate-400">
          <div className="h-16 w-16">
            <img src="/src/assets/imgs/user.svg" alt="" />
          </div>
          <div className="flex h-full w-fit flex-col">
            <span className="w-fit text-base text-slate-700 dark:text-white">
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
        <div className="prose prose-slate mx-auto pb-8 dark:prose-invert lg:prose-xl">
          <ReactMarkdown children={markdown_content} />
        </div>
        <div className="my-8 flex h-80 w-full flex-col rounded bg-slate-100 dark:bg-slate-800">
          <div className="flex w-full basis-[15%] flex-row items-center rounded-t border-l border-r border-t border-slate-300 dark:border-slate-500">
            <span className="indent-4 font-[Lexend] text-2xl text-slate-500 dark:text-slate-300">
              [Read Next]
            </span>
          </div>
          <div className="flex h-full w-full flex-row items-center justify-around rounded-b border border-slate-300 dark:border-slate-500">
            <NextArticleCard article={ArticlesData[1]} />
            <NextArticleCard article={ArticlesData[2]} />
            <NextArticleCard article={ArticlesData[3]} />
            <NextArticleCard article={ArticlesData[4]} />
          </div>
        </div>
      </div>
      <div className="flex basis-[25%]"></div>
    </div>
  );
};

export default ArticlePrototype;
