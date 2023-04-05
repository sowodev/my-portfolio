import { Route, Routes } from "react-router-dom";
import Projects from "../../../pages/Projects";
import { ProjectsData } from "../ProjectsData";
import ProjectPrototype from "../cards-pages/ProjectPrototype";
import { ElementsRoutes } from "./ElementsRoutes";

const ProjectsRoutes = function projectsRoutes() {
  return (
    <Routes>
      <Route index element={<Projects />} />
      {ProjectsData.map((project, index) => {
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
    </Routes>
  );
};

export default ProjectsRoutes;
