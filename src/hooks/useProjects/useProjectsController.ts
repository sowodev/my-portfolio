import {
  ProjectType,
  ProjectsController,
  Tag,
} from "../../interfaces/MultiCardsIntetrfaces";
import { useState } from "react";

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

  function getTotalPages(): number {
    return total_pages;
  }

  function getFilteredProjectsLenght(): number {
    return filtered_projects.length;
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
      return project.title.includes(text) || project.description.includes(text);
    });

    if (text === "") {
      setFilteredProjects(sliceDataIntoArrays(projects_data));
    } else {
      setFilteredProjects(sliceDataIntoArrays(filtered));
    }

    setTotalPages(
      filtered.length > 0
        ? Math.ceil(filtered.length / 8)
        : Math.ceil(projects_data.length / 8)
    );
  }

  function filterMultiCardsByTag(tags: Tag[]): void {
    const filtered = projects_data.filter((project) => {
      return tags.some((tag) => project.tags.includes(tag.name));
    });

    if (tags.length === 0) {
      setFilteredProjects(sliceDataIntoArrays(projects_data));
    } else {
      setFilteredProjects(sliceDataIntoArrays(filtered));
    }

    setTotalPages(
      filtered.length > 0
        ? Math.ceil(filtered.length / 8)
        : Math.ceil(projects_data.length / 8)
    );
  }

  return {
    getTotalPages,
    getFilteredProjectsLenght,
    showingProjects,
    filterMultiCardsByText,
    filterMultiCardsByTag,
  };
}

export default useProjectsController;
