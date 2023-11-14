import { FC, ReactElement, useState } from 'react';
import HomeContext from './HomeContext';

interface HomeContextProviderProps {
  children: ReactElement;
}

const HomeContextProvider: FC<HomeContextProviderProps> = ({
  children,
}: HomeContextProviderProps): ReactElement => {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState('Services');

  const provided_values = {
    details_dialog: { open, setOpen },
    text_panel_controller: { element, setElement },
  };

  return <HomeContext.Provider value={provided_values}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;
