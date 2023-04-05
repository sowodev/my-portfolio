import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticlesRoutes from "./components/articles/routes/ArticlesRoutes";
import ProjectsRoutes from "./components/projects/routes/ProjectsRoutes";

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
          <Route path="/articles/*" element={<ArticlesRoutes />} />
          <Route path="/projects/*" element={<ProjectsRoutes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
