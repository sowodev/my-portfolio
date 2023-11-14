import AppContext from '@context/AppContext';
import { FC, ReactElement, useContext } from 'react';
import Marquee from 'react-fast-marquee';
import TechComp from './TechComp';

const Ticker: FC = (): ReactElement => {
  const { contact_me } = useContext(AppContext);

  return (
    <Marquee pauseOnHover speed={50} play={true}>
      <div className="mx-8 flex h-fit w-fit flex-row items-center justify-between">
        <span className="flex flex-row">
          <p className="font-[Lexend] text-lg font-bold">
            🥷 <span className="text-red-500">Looking for a highly skilled software engineer?</span>{' '}
            🥷
          </p>
          <p className="px-8 font-[Lexend] text-lg">
            Full Stack Web Developer, currently working with:
          </p>
        </span>
        <div className="h-full w-1 border-l border-gray-300" />
        <TechComp name={'TypeScript'} />
        <TechComp name={'Next'} />
        <TechComp name={'React'} />
        <TechComp name={'Nest'} />
        <TechComp name={'Node'} />
        <TechComp name={'Tailwind'} />
        <TechComp name={'MySQL'} />
        <TechComp name={'PostgreSQL'} />
        <TechComp name={'MongoDB'} />
        <TechComp name={'Docker'} />
        <TechComp name={'Linux'} />
        <TechComp name={'Github'} />
        <span className="border-l border-gray-700 px-8 font-[Lexend] text-lg">
          For more information.{' '}
          <button
            className="font-[Lexend] text-lg font-normal text-sky-400 underline hover:text-sky-600"
            onClick={() => contact_me.setOpenDialog(true)}
          >
            Contact Us!
          </button>
        </span>
      </div>
    </Marquee>
  );
};

const MarqueeTicker: FC = function marqueeTicker(): ReactElement {
  return (
    <div className="flex h-[40px] w-full items-center justify-center bg-amber-300">
      <Ticker />
    </div>
  );
};

export default MarqueeTicker;
