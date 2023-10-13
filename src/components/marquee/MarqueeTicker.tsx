import TechComp from './TechComp';
import Marquee from 'react-fast-marquee';
import React, { useContext } from 'react';
import { GlobalContext } from '../commom/context/GlobalContext';

const Ticker: React.FC = (): React.ReactElement => {
  const { set_dialog } = useContext(GlobalContext);

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
        <TechComp name={'Mongo'} />
        <TechComp name={'Docker'} />
        <TechComp name={'Linux'} />
        <TechComp name={'Github'} />
        <span className="border-l border-gray-700 px-8 font-[Lexend] text-lg">
          For more information.{' '}
          <button
            className="font-[Lexend] text-lg font-normal text-sky-400 underline hover:text-sky-600"
            onClick={() => set_dialog.setOpenDialog(true)}
          >
            Contact Us!
          </button>
        </span>
      </div>
    </Marquee>
  );
};

const MarqueeTicker: React.FC = function marqueeTicker(): React.ReactElement {
  return (
    <div className="flex h-[40px] w-full items-center justify-center bg-amber-300">
      <Ticker />
    </div>
  );
};

export default MarqueeTicker;
