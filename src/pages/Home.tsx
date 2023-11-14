import HomeMain from '@domain/home/components/HomeMain';
import HomeContextProvider from '@domain/home/context/HomeContextProvider';
import { ReactElement } from 'react';

const Home = function home(): ReactElement {
  return (
    <HomeContextProvider>
      <HomeMain />
    </HomeContextProvider>
  );
};

export default Home;
