import MoreDetailsModal from '@domain/home/text_panel/services_details/MoreDetailsModal';
import AppPagesRoutes from '@routes/AppPagesRoutes';
import { ReactElement, useEffect, useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';
import ContactMeModal from './components/contact-modal/ContactMeModal';
import MarqueeTicker from './components/marquee/MarqueeTicker';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import {
  CreditsType,
  DarkType,
  DetailsDialogType,
  DialogType,
  GlobalContext,
} from './context/GlobalContext';

function App(): ReactElement {
  // TODO: Move all the Contexts to the context folder
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

  // TODO: move this effect to the theme controller context
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
        <div className="relative z-0 flex h-full w-full overflow-auto transition duration-300 ease-in-out dark:bg-slate-800">
          <Sidebar />
          <AppPagesRoutes />
        </div>
        <ContactMeModal />
        <MoreDetailsModal />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
