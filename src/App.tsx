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
import ContactMeModal from "./components/commom/contact-modal/ContactMeModal";
import {
  CreditsType,
  DarkType,
  DialogType,
  GlobalContext,
} from "./components/commom/context/GlobalContext";
import { useState } from "react";
import DarkModeBtn from "./components/global-btns/DarkModeBtn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [open_dialog, setOpenDialog] = useState(false);
  const set_dialog: DialogType = { open_dialog, setOpenDialog };
  const [is_dark, setIsDark] = useState("light");
  const set_dark: DarkType = { is_dark, setIsDark };
  const [open_credits, setOpenCredits] = useState(false);
  const set_credits: CreditsType = { open_credits, setOpenCredits };

  return (
    <div className={`flex flex-col w-full h-screen ${is_dark}`}>
      <GlobalContext.Provider value={{ set_dialog, set_credits, set_dark }}>
        <div className="flex flex-col z-10 sticky top-0">
          <Navbar />
          <MarqueeTicker />
          <DarkModeBtn />
        </div>
        <div className="flex w-full h-full overflow-hidden z-0 dark:bg-slate-800 transition ease-in-out duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/*" element={<ArticlesRoutes />} />
            <Route path="/projects/*" element={<ProjectsRoutes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
        <ContactMeModal />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
