import {
  ArticlesController,
  article_type,
  Tag,
} from "../../interfaces/ArticlesInterfaces";

import { useState, useEffect } from "react";

function useArticlesController(articles: article_type[]): ArticlesController {
  const [filtered_articles, setFilteredArticles] = useState(articles);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [cutEnd, setCutEnd] = useState(4);

  function showingArticles(): article_type[] {
    if (filtered_articles.length > 0) {
      return filtered_articles.slice(
        0,
        filtered_articles.length < cutEnd ? filtered_articles.length : cutEnd
      );
    } else {
      return articles.slice(
        0,
        articles.length < cutEnd ? articles.length : cutEnd
      );
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
  }

  function filterArticlesByTag(tags: Tag[]): void {
    const filtered = articles.filter((article) => {
      return tags.some((tag) => article.tags.includes(tag.name));
    });
    setFilteredArticles(filtered);
  }

  function getArticles(): article_type[] {
    return articles;
  }

  useEffect(() => {
    setFilteredArticles(articles);
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
