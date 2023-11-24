import useAppContextProvider from '@hooks/useAppContextProvider';
import { FC, ReactElement } from 'react';
import AppContext from './AppContext';
import { AppContextType } from './types';

interface AppContextProviderProps {
  children: ReactElement;
}

const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps): ReactElement => {
  const provided_values: AppContextType = useAppContextProvider();

  return <AppContext.Provider value={provided_values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
