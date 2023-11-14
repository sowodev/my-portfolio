import AppContext from '@context/AppContext';
import AppPagesRoutes from '@routes/AppPagesRoutes';
import { ReactElement, useContext } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';
import ContactMeModal from './components/contact-modal/ContactMeModal';
import MarqueeTicker from './components/marquee/MarqueeTicker';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App(): ReactElement {
  const { theme } = useContext(AppContext);

  return (
    <div className={`flex h-screen w-full flex-col ${theme.mode}`}>
      <div className="sticky top-0 z-10 flex flex-col">
        <Navbar />
        <MarqueeTicker />
      </div>
      <div className="relative z-0 flex h-full w-full overflow-auto transition duration-300 ease-in-out dark:bg-slate-800">
        <Sidebar />
        <AppPagesRoutes />
      </div>
      <ContactMeModal />
    </div>
  );
}

export default App;
