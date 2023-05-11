export type ArticleType = {
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

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type Tag = {
  id: string;
  name: string;
};

export interface ArticlesController {
  getArticles: () => ArticleType[];
  showingArticles: () => ArticleType[];
  addMoreArticles: () => void;
  checkDisabledBtn: () => boolean;
  filterMultiCardsByText: (text: string) => void;
  filterMultiCardsByTag: (tags: Tag[]) => void;
}

export interface ProjectsController {
  getTotalPages: () => number;
  getFilteredProjectsLenght: () => number;
  showingProjects: (page: number) => ProjectType[];
  filterMultiCardsByText: (text: string) => void;
  filterMultiCardsByTag: (tags: Tag[]) => void;
}
