import React from "react";

export type article_type = {
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

export interface ArticlesController {
  getArticles: () => article_type[];
  showingArticles: () => article_type[];
  addMoreArticles: () => void;
  checkDisabledBtn: () => boolean;
  filterArticlesByText: (text: string) => void;
  filterArticlesByTag: (tags: Tag[]) => void;
}

export interface Tag {
  id: string;
  name: string;
}
