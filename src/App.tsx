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
import MarqueeTicker from "./components/marquee/MarqueeTicker";
import ContactMeModal from "./components/commom/ContactMeModal";
import { DialogContext } from "./components/commom/context/DialogContext";
import { useState } from "react";

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen">
      <DialogContext.Provider value={{ openDialog, setOpenDialog }}>
        <div className="flex flex-col sticky top-0">
          <Navbar />
          <MarqueeTicker />
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
        <ContactMeModal />
      </DialogContext.Provider>
    </div>
  );
}

export default App;
