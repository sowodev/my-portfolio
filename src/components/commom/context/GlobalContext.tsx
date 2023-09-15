import { Dispatch, SetStateAction, createContext } from 'react';

export type DialogType = {
  open_dialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

export type CreditsType = {
  open_credits: boolean;
  setOpenCredits: Dispatch<SetStateAction<boolean>>;
};

export type DarkType = {
  is_dark: string;
  setIsDark: Dispatch<SetStateAction<string>>;
};

export type SidebarType = {
  open_sidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

export type DetailsDialogType = {
  details_modal: 'develop' | 'fix' | 'consult';
  setDetailsModal: Dispatch<SetStateAction<'develop' | 'fix' | 'consult'>>;
  open_details_dialog: boolean;
  setOpenDetailsDialog: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext({
  set_dialog: {
    open_dialog: false,
    setOpenDialog: (open: boolean) => {},
  } as DialogType,
  set_dark: {
    is_dark: 'light',
    setIsDark: (is_dark: string) => {},
  } as DarkType,
  set_credits: {
    open_credits: false,
    setOpenCredits: (open: boolean) => {},
  } as CreditsType,
  set_sidebar: {
    open_sidebar: false,
    setOpenSidebar: (open: boolean) => {},
  } as SidebarType,
  set_details: {
    details_modal: 'develop',
    setDetailsModal: (details_modal: 'develop' | 'fix' | 'consult') => {},
    open_details_dialog: false,
    setOpenDetailsDialog: (open: boolean) => {},
  } as DetailsDialogType,
});

export { GlobalContext };
