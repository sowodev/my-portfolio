import { createContext } from 'react';

const HomeContext = createContext({
  text_to_show: 'Services',
  setTextToShow: (text: string) => {},
});

export { HomeContext };
