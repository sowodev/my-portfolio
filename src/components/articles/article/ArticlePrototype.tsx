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
      className="flex h-full max-w-full lg:w-full flex-row overflow-scroll pt-4 md:pt-12 "
      ref={contentRef}
    >
      <div className="hidden lg:flex basis-[25%]"></div>
      <div
        className="flex h-fit w-full lg:basis-[50%] flex-col md:gap-4"
        lang="en-US"
      >
        <h1 className="max-w-full lg:w-full text-center font-[Lexend] text-2xl mx-6 md:text-3xl lg:text-5xl hyphens-auto dark:text-white">
          {article.title}
        </h1>
        <h3 className="max-w-full lg:w-full pt-2 text-center font-[Lexend] text-sm mx-6 md:text-lg font-light text-slate-500 hyphens-auto dark:text-slate-300">
          {article.leading}
        </h3>
        <div className="flex w-full flex-row justify-center gap-5 font-[Lexend] text-xs lg:text-sm font-light text-sky-500">
          {article.tags.map((current, index) => {
            return (
              <span key={index}>
                {current.length > 15 ? current.slice(0, 14) + "..." : current}
              </span>
            );
          })}
        </div>
        <div className="flex w-full flex-col">
          <hr className="mx-4 lg:mx-0 my-4 dark:border-slate-500" />
          <img
            className="px-4 lg:px-0 aspect-video w-full"
            src={article.img_path}
            alt="img"
          />
          <span className="px-4 lg:px-0 mt-2 text-xs lg:text-sm font-extralight lg:font-light text-gray-400">
            {article.img_credits}
          </span>
          <hr className="mx-4 lg:mx-0 my-4 dark:border-slate-500" />
        </div>
        <div className="flex w-full flex-row justify-start font-[Lexend] text-xs font-light text-slate-400">
          <div className="ps-4 h-16 w-16">
            <img src="/imgs/user.svg" alt="" />
          </div>
          <div className="flex h-full w-fit flex-col">
            <span className="w-fit text-sm lg:text-base text-slate-700 dark:text-white">
              {article.author}
            </span>
            <span className="w-fit text-xs lg:text-base dark:text-slate-300">
              Published: {new Date(article.published_date).toLocaleString()}
            </span>
            <span className="w-fit text-xs lg:text-base dark:text-slate-300">
              Last Update: {new Date(article.updated_date).toLocaleString()}
            </span>
          </div>
        </div>
        <div className="md:prose prose-sm prose-slate mx-6 md:mx-auto pb-8 dark:prose-invert lg:prose-xl">
          <ReactMarkdown children={markdown_content} />
        </div>
        <div className="my-8 flex h-full w-[90%] lg:h-80 lg:w-full flex-col rounded bg-slate-100 dark:bg-slate-800 self-center">
          <div className="flex w-full lg:basis-[15%] lg:flex-row items-center rounded-t border-l border-r border-t border-slate-300 dark:border-slate-500">
            <span className="indent-4 font-[Lexend] text-2xl text-slate-500 dark:text-slate-300">
              [Read Next]
            </span>
          </div>
          <div className="flex h-full w-full gap-4 md:gap-2 py-2 flex-col md:flex-row items-center justify-around rounded-b border border-slate-300 dark:border-slate-500">
            <NextArticleCard article={ArticlesData[3]} />
            <NextArticleCard article={ArticlesData[1]} />
            <NextArticleCard article={ArticlesData[4]} />
            <NextArticleCard article={ArticlesData[2]} />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex basis-[25%]"></div>
    </div>
  );
};

export default ArticlePrototype;
