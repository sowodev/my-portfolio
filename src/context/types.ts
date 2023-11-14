import { Dispatch, SetStateAction } from 'react';

type ContactMeDialogType = {
  open_dialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

// TODO: Change where needed is_dark to mode
// TODO: Change where needed setIsDark to setMode
type ThemeControllerType = {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
};

type SidebarType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type CreditsType = {
  open_credits: boolean;
  setOpenCredits: Dispatch<SetStateAction<boolean>>;
};

export type AppContextType = {
  contact_me: ContactMeDialogType;
  theme: ThemeControllerType;
  sidebar: SidebarType;
  credits: CreditsType;
};
