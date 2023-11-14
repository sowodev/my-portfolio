import { FC, ReactElement, useEffect, useState } from 'react';
import AppContext from './AppContext';

interface AppContextProviderProps {
  children: ReactElement;
}

const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps): ReactElement => {
  const [open_dialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('light');
  const [open_credits, setOpenCredits] = useState(false);

  const provided_values = {
    contact_me: { open_dialog, setOpenDialog },
    theme: { mode, setMode },
    sidebar: { open, setOpen },
    credits: { open_credits, setOpenCredits },
  };

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setMode(localStorage.getItem('theme')!);
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return <AppContext.Provider value={provided_values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
