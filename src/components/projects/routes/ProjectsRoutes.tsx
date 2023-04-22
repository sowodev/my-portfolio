import { Route, Routes } from "react-router-dom";
import Projects from "../../../pages/Projects";
import { ProjectsData, Project } from "../ProjectsData";
import { ElementsRoutes } from "./ElementsRoutes";
import NotFound from "../../../pages/NotFound";
import { useState } from "react";

function sliceDataIntoArrays() {
  const array_of_arrays: Project[][] = [];

  for (let i = 0; i < ProjectsData.length; i += 8)
    array_of_arrays.push(ProjectsData.slice(i, i + 8));

  return array_of_arrays;
}

const ProjectsRoutes = function projectsRoutes() {
  const [arrays_of_projects, setArraysOfProjects] = useState<Project[][]>(
    sliceDataIntoArrays()
  );

  return (
    <Routes>
      <Route index element={<Projects />} />
      {ProjectsData.map((project: any, index: number) => {
        const link: string = project.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim()
          .replaceAll(" ", "-");

        return (
          <Route
            key={index}
            path={link}
            element={ElementsRoutes.get(project.title)}
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProjectsRoutes;
