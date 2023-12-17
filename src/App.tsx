import AppContext from '@context/AppContext';
import AppPagesRoutes from '@routes/AppPagesRoutes';
import { ReactElement, useContext } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';
import ContactMeDialog from './components/contact-dialog/ContactMeDialog';
import StackMarquee from './components/marquee/StackMarquee';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App(): ReactElement {
  const { theme } = useContext(AppContext);

  return (
    <div className={`flex h-screen w-full flex-col ${theme.mode}`}>
      <div className="sticky top-0 z-10 flex flex-col">
        <Navbar />
        <StackMarquee />
      </div>
      <div className="relative z-0 flex h-full w-full overflow-auto transition duration-300 ease-in-out dark:bg-slate-800">
        <Sidebar />
        <AppPagesRoutes />
      </div>
      <ContactMeDialog />
    </div>
  );
}

export default App;
