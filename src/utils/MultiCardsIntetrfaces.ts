export type ProjectType = {
  title: string;
  description: string;
  img_path: string;
  tags: string[];
  redirect_url: string;
};

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
