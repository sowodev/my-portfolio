export type PostsType = {
  img_path: string;
  title: string;
  leading: string;
  content_path: string;
  published_date: string;
  updated_date: string;
  tags: string[];
  author: string;
  img_credits: string;
  thumb_img_path: string;
};

export type PostsDTO = {
  title: string;
  leading_content: string;
  md_name: string;
  author: string;
  name_img: string;
  img_credits: string;
  tags: string;
  created_at: string;
  updated_at: string;
  thumb_img_path: string;
};

export type ProjectType = {
  title: string;
  description: string;
  img_path: string;
  tags: string[];
  redirect_url: string;
};

export interface PostsController {
  getPosts: () => PostsType[];
  showingPosts: () => PostsType[];
  addMorePosts: () => void;
  checkDisabledBtn: () => boolean;
  filterMultiCardsByText: (text: string) => void;
  filterMultiCardsByTag: (tags: string[]) => void;
  getTags: () => string[];
}

export interface ProjectsController {
  setProjects: (projects: ProjectType[]) => void;
  getCurrentPage: () => number;
  setCurrentPageState: (page: number) => void;
  getTotalPages: () => number;
  getFilteredProjectsLenght: () => number;
  pageChangeHandler: (hadlePageChanges: (page: number) => void) => void;
  showingProjects: (page: number) => ProjectType[];
  filterMultiCardsByText: (text: string) => void;
  filterMultiCardsByTag: (tags: string[]) => void;
  getTags: () => string[];
}
