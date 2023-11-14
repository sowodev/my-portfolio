import { Context, createContext } from 'react';
import { HomeContextType } from './types';

const context_states: HomeContextType = {
  details_dialog: { open: false, setOpen: () => {} },
  text_panel_controller: { element: 'Services', setElement: () => {} },
};

const HomeContext: Context<HomeContextType> = createContext(context_states);

export default HomeContext;
