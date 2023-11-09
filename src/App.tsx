import BlogRoutes from '@domain/blog/routes/BlogRoutes';
import MoreDetailsModal from '@domain/home/text_panel/services_details/MoreDetailsModal';
import { Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';
import ContactMeModal from './components/commom/contact-modal/ContactMeModal';
import {
  CreditsType,
  DarkType,
  DetailsDialogType,
  DialogType,
  GlobalContext,
} from './components/context/GlobalContext';
import MarqueeTicker from './components/marquee/MarqueeTicker';
import Navbar from './components/navbar/Navbar';
import ProjectsRoutes from './components/projects/routes/ProjectsRoutes';
import Sidebar from './components/sidebar/Sidebar';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Test from './pages/Test';

function App() {
  const [open_dialog, setOpenDialog] = useState(false);
  const set_dialog: DialogType = { open_dialog, setOpenDialog };
  const [is_dark, setIsDark] = useState('light');
  const set_dark: DarkType = { is_dark, setIsDark };
  const [open_credits, setOpenCredits] = useState(false);
  const set_credits: CreditsType = { open_credits, setOpenCredits };
  const [open_sidebar, setOpenSidebar] = useState(false);
  const set_sidebar = { open_sidebar, setOpenSidebar };
  const [open_details_dialog, setOpenDetailsDialog] = useState(false);
  const set_details: DetailsDialogType = {
    open_details_dialog,
    setOpenDetailsDialog,
  };

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setIsDark(localStorage.getItem('theme')!);
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <div className={`flex h-screen w-full flex-col ${is_dark}`}>
      <GlobalContext.Provider
        value={{ set_dialog, set_credits, set_dark, set_sidebar, set_details }}
      >
        <div className="sticky top-0 z-10 flex flex-col">
          <Navbar />
          <MarqueeTicker />
        </div>
        <div className="relative z-0 flex h-full lg:h-full w-full overflow-auto transition duration-300 ease-in-out dark:bg-slate-800">
          <Sidebar />
          <div className="flex h-full lg:h-full w-full">
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
              <Route path="/articles/*" element={<BlogRoutes />} />
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
        <MoreDetailsModal />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
