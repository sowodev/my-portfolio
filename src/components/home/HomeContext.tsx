import { createContext } from "react";

const HomeContext = createContext({
  text_to_show: "Me",
  setTextToShow: (text: string) => {},
});

export { HomeContext };
