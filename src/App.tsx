import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import { ArticilesData } from "./components/articles/ArticlesData";
import ArticlePrototype from "./components/articles/article/ArticlePrototype";
import { projectsData } from "./components/projects/ProjectsData";
import ProjectPrototype from "./components/projects/cards-pages/ProjectPrototype";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col sticky top-0">
        <Navbar />
        <div className="flex absolute top-[4.5rem] w-full h-[45px] bg-amber-300 justify-center items-center">
          <span className="font-[Lexend]">Mecados de Capitais API</span>
        </div>
      </div>
      <div className="flex w-full h-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles">
            <Route index element={<Articles />} />
            {ArticilesData.map((article, index) => {
              const link: string = article.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim()
                .replaceAll(" ", "-");

              return (
                <Route
                  key={index}
                  path={link}
                  element={<ArticlePrototype article={article} />}
                />
              );
            })}
          </Route>
          <Route path="/projects">
            <Route index element={<Projects />} />
            {projectsData.map((project, index) => {
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
                  element={<ProjectPrototype project={project.title} />}
                />
              );
            })}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
