import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { FC, ReactElement } from 'react';

const UnderImprovements: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-8 w-full h-full justify-center items-center">
      <WrenchScrewdriverIcon className="w-20 h-20 stroke-cyan-300" />
      <h1 className="h-fit w-[50%] text-3xl text-justify dark:text-white">
        This page is under some improvements right now, I am sorry for the inconvenience.{' '}
      </h1>
      <i className="text-amber-300 text-3xl">Great things are coming, thanks for your patience!</i>
    </div>
  );
};

export default UnderImprovements;
