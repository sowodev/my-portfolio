import {
  ProjectType,
  ProjectsController,
} from "../../../utils/MultiCardsIntetrfaces";
import { useEffect, useState } from "react";

function sliceDataIntoArrays(projects: ProjectType[]): ProjectType[][] {
  const array_of_arrays: ProjectType[][] = [];

  for (let i = 0; i < projects.length; i += 8)
    array_of_arrays.push(
      projects.slice(i, i + 8 > projects.length ? projects.length : i + 8)
    );

  return array_of_arrays;
}

function useProjectsController(
  projects_data: ProjectType[]
): ProjectsController {
  const [filtered_projects, setFilteredProjects] = useState<ProjectType[][]>(
    sliceDataIntoArrays(projects_data)
  );
  const [total_pages, setTotalPages] = useState<number>(
    filtered_projects.length
  );
  const [current_page, setCurrentPage] = useState<number>(1);
  const [tags, setTags] = useState<string[]>([]);

  // useEffect to make sure we are gonna have the tags array filled whenever the project's data is available
  useEffect(() => {
    const tags_aux: string[] = [];
    projects_data.forEach((projects: ProjectType) => {
      projects.tags.forEach((tag) => {
        if (!tags_aux.some((t) => t === tag)) {
          tags_aux.push(tag);
        }
      });
    });

    setTags(tags_aux);
  }, [projects_data]);

  function setProjects(data: ProjectType[]): void {
    setFilteredProjects(sliceDataIntoArrays(data));
    setTotalPages(Math.ceil(data.length / 8));
  }

  function getCurrentPage(): number {
    return current_page;
  }

  function setCurrentPageState(page: number): void {
    setCurrentPage(page);
  }

  function getTotalPages(): number {
    return total_pages;
  }

  function getFilteredProjectsLenght(): number {
    return filtered_projects.length;
  }

  function pageChangeHandler(hadlePageChanges: (page: number) => void): void {
    hadlePageChanges(current_page);
  }

  function showingProjects(page: number): ProjectType[] {
    if (page > filtered_projects.length) {
      return filtered_projects[0];
    } else {
      return filtered_projects[page];
    }
  }

  function filterMultiCardsByText(text: string): void {
    const filtered = projects_data.filter((project) => {
      return (
        project.title.toLowerCase().includes(text.toLowerCase()) ||
        project.description.toLowerCase().includes(text.toLowerCase())
      );
    });

    if (text === "") {
      setFilteredProjects(sliceDataIntoArrays(projects_data));
    } else {
      setFilteredProjects(sliceDataIntoArrays(filtered));
    }

    setTotalPages(
      text === ""
        ? Math.ceil(projects_data.length / 8)
        : Math.ceil(filtered.length / 8)
    );
  }

  function filterMultiCardsByTag(tags: string[]): void {
    const filtered = projects_data.filter((project) => {
      return tags.some((tag) => project.tags.includes(tag));
    });

    if (tags.length === 0) {
      setFilteredProjects(sliceDataIntoArrays(projects_data));
    } else {
      setFilteredProjects(sliceDataIntoArrays(filtered));
    }

    setTotalPages(
      tags.length === 0
        ? Math.ceil(projects_data.length / 8)
        : Math.ceil(filtered.length / 8)
    );
  }

  function getTags(): string[] {
    return tags;
  }

  return {
    setProjects,
    getCurrentPage,
    setCurrentPageState,
    getTotalPages,
    getFilteredProjectsLenght,
    pageChangeHandler,
    showingProjects,
    filterMultiCardsByText,
    filterMultiCardsByTag,
    getTags,
  };
}

export default useProjectsController;
