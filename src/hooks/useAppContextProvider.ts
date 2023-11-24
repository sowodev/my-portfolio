import { useEffect, useState } from 'react';
import { AppContextType } from '../context/types';

function useAppContextProvider(): AppContextType {
  const [open_dialog, setOpenDialog] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [open_credits, setOpenCredits] = useState<boolean>(false);

  const provided_values: AppContextType = {
    contact_me: { open_dialog, setOpenDialog },
    theme: { mode, setMode },
    sidebar: { open, setOpen },
    credits: { open_credits, setOpenCredits },
  };

  useEffect((): void => {
    if (localStorage.getItem('theme')) {
      setMode(localStorage.getItem('theme') as 'light' | 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return provided_values;
}

export default useAppContextProvider;
