import { Dispatch, SetStateAction, createContext } from "react";

export type DialogType = {
  open_dialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

export type DarkType = {
  is_dark: string;
  setIsDark: Dispatch<SetStateAction<string>>;
};

const GlobalContext = createContext({
  set_dialog: {
    open_dialog: false,
    setOpenDialog: (open: boolean) => {},
  } as DialogType,
  set_dark: {
    is_dark: "light",
    setIsDark: (is_dark: string) => {},
  } as DarkType,
});

export { GlobalContext };
