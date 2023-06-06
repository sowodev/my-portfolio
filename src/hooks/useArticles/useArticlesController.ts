import {
  ArticlesController,
  ArticleType,
  Tag,
} from "../../interfaces/MultiCardsIntetrfaces";

import { useState, useEffect } from "react";

function useArticlesController(articles: ArticleType[]): ArticlesController {
  const [filtered_articles, setFilteredArticles] = useState(articles);
  const [cutEnd, setCutEnd] = useState(4);

  function showingArticles(): ArticleType[] {
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
    if (cutEnd < articles.length)
      setCutEnd((c) =>
        articles.length - c < 4 ? c + (articles.length - c) : c + 4
      );
  }

  function checkDisabledBtn(): boolean {
    return cutEnd >= articles.length;
  }

  function filterMultiCardsByText(text: string): void {
    const filtered = articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(text) ||
        article.leading.toLowerCase().includes(text)
      );
    });
    setFilteredArticles(filtered);
  }

  function filterMultiCardsByTag(tags: Tag[]): void {
    const filtered = articles.filter((article) => {
      return tags.some((tag) => article.tags.includes(tag.name));
    });
    setFilteredArticles(filtered);
  }

  function getArticles(): ArticleType[] {
    return articles;
  }

  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  return {
    showingArticles,
    addMoreArticles,
    checkDisabledBtn,
    filterMultiCardsByText,
    filterMultiCardsByTag,
    getArticles,
  };
}

export default useArticlesController;
