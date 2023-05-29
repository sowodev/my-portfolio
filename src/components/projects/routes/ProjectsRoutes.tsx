import { Route, Routes } from "react-router-dom";
import Projects from "../../../pages/Projects";
import { ProjectsData } from "../ProjectsData";
import { ElementsRoutes } from "./ElementsRoutes";
import NotFound from "../../../pages/NotFound";
import { useState } from "react";
import { ProjectType } from "../../../interfaces/MultiCardsIntetrfaces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useProjectsController from "../../../hooks/useProjects/useProjectsController";

type ProjectsDTO = {
  title: string;
  description: string;
  img_name: string;
  tags: string;
  created_at: string;
  updated_at: string;
};

const ProjectsRoutes = function projectsRoutes() {
  const [new_projects_data, setNewProjectsData] = useState<ProjectType[]>([]);
  const projects_controller = useProjectsController([]);

  const query = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      axios
        .get("https://my-portfolio-be-production.up.railway.app/projects/")
        .then((res) => {
          const projects_temp: ProjectType[] = [];

          res.data.forEach((project: ProjectsDTO) => {
            const project_temp: ProjectType = {
              title: project.title,
              description: project.description,
              img_path: project.img_name,
              tags: project.tags.split(","),
            };

            projects_temp.push(project_temp);
          });

          setNewProjectsData([...projects_temp, ...ProjectsData]);
          projects_controller.setProjects([...projects_temp, ...ProjectsData]);

          return res.data;
        }),
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        index
        element={<Projects projects_controller={projects_controller} />}
      />
      {new_projects_data.map((project: any, index: number) => {
        const link: string = project.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^\w\s]/gi, "")
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
