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
import { Fragment, useEffect, useState } from "react";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Sidebar from "./components/sidebar/Sidebar";
import { Transition } from "@headlessui/react";

function App() {
  const [open_dialog, setOpenDialog] = useState(false);
  const set_dialog: DialogType = { open_dialog, setOpenDialog };
  const [is_dark, setIsDark] = useState("light");
  const set_dark: DarkType = { is_dark, setIsDark };
  const [open_credits, setOpenCredits] = useState(false);
  const set_credits: CreditsType = { open_credits, setOpenCredits };
  const [open_sidebar, setOpenSidebar] = useState(false);
  const set_sidebar = { open_sidebar, setOpenSidebar };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setIsDark(localStorage.getItem("theme")!);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <div className={`flex h-screen w-full flex-col ${is_dark}`}>
      <GlobalContext.Provider
        value={{ set_dialog, set_credits, set_dark, set_sidebar }}
      >
        <div className="sticky top-0 z-10 flex flex-col">
          <Navbar />
          <MarqueeTicker />
        </div>
        <div className="relative z-0 flex h-full w-full overflow-auto transition duration-300 ease-in-out dark:bg-slate-800">
          <Sidebar />
          <div className="flex h-full w-full">
            <Transition show={set_sidebar.open_sidebar}>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 z-10 flex bg-black bg-opacity-25 transition duration-300 ease-in-out" />
              </Transition.Child>
            </Transition>
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
        </div>
        <ContactMeModal />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
