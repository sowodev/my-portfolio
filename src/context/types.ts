import { Dispatch, SetStateAction } from 'react';

type ContactMeDialogType = {
  open_dialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

type ThemeControllerType = {
  mode: 'light' | 'dark';
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>;
};

type SidebarType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type CreditsDialogType = {
  open_credits: boolean;
  setOpenCredits: Dispatch<SetStateAction<boolean>>;
};

export type AppContextType = {
  contact_me: ContactMeDialogType;
  theme: ThemeControllerType;
  sidebar: SidebarType;
  credits: CreditsDialogType;
};
