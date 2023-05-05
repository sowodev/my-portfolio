import {
  ArticlesController,
  article_type,
  Tag,
} from "../../interfaces/ArticlesInterfaces";

import { useState, useEffect } from "react";

function useArticlesController(articles: article_type[]): ArticlesController {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [cutEnd, setCutEnd] = useState(4);

  function showingArticles(): article_type[] {
    if (filteredArticles.length > 0) {
      return filteredArticles.slice(0, cutEnd);
    } else {
      return articles.slice(0, cutEnd);
    }
  }

  function addMoreArticles(): void {
    if (cutEnd < articles.length) {
      setCutEnd(cutEnd + 4);
    } else {
      setDisabledBtn(true);
    }
  }

  function checkDisabledBtn(): boolean {
    return disabledBtn;
  }

  function filterArticlesByText(text: string): void {
    const filtered = articles.filter((article) => {
      return article.title.includes(text) || article.leading.includes(text);
    });
    setFilteredArticles(filtered);
    /*     setCutEnd(4);
    setDisabledBtn(false); */
  }

  function filterArticlesByTag(tags: Tag[]): void {
    const filtered = articles.filter((article) => {
      return tags.some((tag) => article.tags.includes(tag.name));
    });
    setFilteredArticles(filtered);
    /*     setCutEnd(4);
    setDisabledBtn(false); */
  }

  function getArticles(): article_type[] {
    return articles;
  }

  useEffect(() => {
    setFilteredArticles(articles);
    /*     setDisabledBtn(false);
    setCutEnd(4); */
  }, [articles]);

  return {
    showingArticles,
    addMoreArticles,
    checkDisabledBtn,
    filterArticlesByText,
    filterArticlesByTag,
    getArticles,
  };
}

export default useArticlesController;
