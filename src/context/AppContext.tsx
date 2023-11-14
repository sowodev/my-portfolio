import { Context, createContext } from 'react';
import { AppContextType } from './types';

const context_states: AppContextType = {
  contact_me: { open_dialog: false, setOpenDialog: () => {} },
  theme: { mode: 'light', setMode: () => {} },
  sidebar: { open: false, setOpen: () => {} },
  credits: { open_credits: false, setOpenCredits: () => {} },
};

const AppContext: Context<AppContextType> = createContext(context_states);

export default AppContext;
