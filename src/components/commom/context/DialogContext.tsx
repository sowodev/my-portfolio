import { createContext } from "react";

const DialogContext = createContext({
  openDialog: false,
  setOpenDialog: (open: boolean) => {},
});

export { DialogContext };
