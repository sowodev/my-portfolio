import { FC, ReactElement, useEffect, useState } from 'react';
import AppContext from './AppContext';

interface AppContextProviderProps {
  children: ReactElement;
}

const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps): ReactElement => {
  const [open_dialog, setOpenDialog] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [open_credits, setOpenCredits] = useState<boolean>(false);

  const provided_values = {
    contact_me: { open_dialog, setOpenDialog },
    theme: { mode, setMode },
    sidebar: { open, setOpen },
    credits: { open_credits, setOpenCredits },
  };

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setMode(localStorage.getItem('theme') as 'light' | 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return <AppContext.Provider value={provided_values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;