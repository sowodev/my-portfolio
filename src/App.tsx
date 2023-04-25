import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ArticlesRoutes from "./components/articles/routes/ArticlesRoutes";
import ProjectsRoutes from "./components/projects/routes/ProjectsRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col sticky top-0">
        <Navbar />
        <div className="flex w-full h-[45px] bg-amber-300 justify-center items-center">
          <span className="font-[Lexend]">Mecados de Capitais API</span>
        </div>
      </div>
      <div className="flex w-full h-full overflow-hidden dark:bg-slate-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/*" element={<ArticlesRoutes />} />
          <Route path="/projects/*" element={<ProjectsRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
