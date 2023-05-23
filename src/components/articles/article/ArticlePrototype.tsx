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
      className="flex flex-row w-full h-full overflow-scroll pt-12 "
      ref={contentRef}
    >
      <div className="flex basis-[25%]"></div>
      <div className="flex flex-col h-fit basis-[50%] gap-4" lang="pt-BR">
        <h1 className="w-full text-5xl text-center font-[Lexend] hyphens-auto dark:text-white">
          {article.title}
        </h1>
        <h3 className="w-full pt-2 text-lg text-center font-[Lexend] font-light text-slate-500 hyphens-auto dark:text-slate-300">
          {article.leading}
        </h3>
        <div className="flex flex-row w-full gap-5 justify-center font-[Lexend] font-light text-sky-500 text-sm">
          {article.tags.map((current, index) => {
            return (
              <span key={index}>
                {current.length > 10 ? current.slice(0, 9) + "..." : current}
              </span>
            );
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
        <div className="flex flex-col w-full h-80 my-8 rounded bg-slate-100 dark:bg-slate-800">
          <div className="flex flex-row w-full basis-[15%] items-center rounded-t border-l border-t border-r border-slate-300 dark:border-slate-500">
            <span className="font-[Lexend] text-2xl indent-4 text-slate-500 dark:text-slate-300">
              [Read Next]
            </span>
          </div>
          <div className="flex flex-row w-full h-full border border-slate-300 rounded-b justify-around items-center dark:border-slate-500">
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
