import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React, { useContext } from 'react';
import { GlobalContext } from '../../commom/context/GlobalContext';

const Services: React.FC = function services(): React.ReactElement {
  const { set_dialog, set_details, set_dark } = useContext(GlobalContext);

  return (
    <div className="flex flex-col h-full w-full justify-start items-center">
      <div className="prose prose-slate mx-auto mt-4">
        <p className="mb-2 text-justify font-[Lexend] text-lg md:text-2xl lg:text-3xl font-bold dark:text-white">
          Looking for someone to build or fix your web application?{' '}
        </p>
      </div>
      <div className="flex flex-col w-[95%] h-fit md:w-[85%] gap-4 p-5 mt-8 font-[Lexend] items-center justify-between rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col text-slate-700 dark:text-white">
            <span className="sm:text-sm md:text-lg lg:text-2xl">
              Design and/or Develop Your Web Application
            </span>
            <span className="text-sm font-light text-slate-600 indent-4 dark:text-slate-200">
              ✅ We are going to bring your 😴 dream web application to life!
            </span>
          </div>
          <div className="flex flex-col text-slate-700 dark:text-white">
            <span className="sm:text-sm md:text-lg lg:text-2xl">
              Fix and/or Optimize Your Web Application
            </span>
            <span className="text-sm font-light text-slate-600 indent-4 dark:text-slate-200">
              ✅ We are going to make your web application 🛡️safer, ⚡faster and 🍹smoother!
            </span>
          </div>
          <div className="flex flex-col w text-slate-700 dark:text-white">
            <span className="sm:text-sm md:text-lg lg:text-2xl">
              Consultancy About Your Web Application
            </span>
            <span className="text-sm font-light text-slate-600 indent-4 dark:text-slate-200">
              ✅ We are going to guide your web application projects 🤓. So you can ship faster and
              make money 🤑!
            </span>
          </div>
        </div>

        <div className="flex w-full justify-end items-center gap-2">
          <button
            className="flex h-8 flex-row items-center justify-center gap-1 rounded bg-amber-300 duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-md lg:hover:shadow-lg"
            onClick={(): void => {
              set_details.setOpenDetailsDialog(true);
            }}
          >
            <ExclamationCircleIcon className="ml-2 h-5 w-5 stroke-white" />
            <span className="mr-2 font-[Lexend] text-sm md:text-sm text-white dark:text-slate-100">
              More Details!
            </span>
          </button>
          <button
            className="flex h-8 flex-row items-center justify-center gap-1 rounded bg-green-400 duration-300 ease-in-out hover:scale-110 hover:bg-green-500 hover:shadow-md lg:hover:shadow-lg"
            onClick={(): void => set_dialog.setOpenDialog(true)}
          >
            <EnvelopeIcon className="ml-2 h-5 w-5 stroke-white" />
            <span className="mr-2 font-[Lexend] text-sm md:text-sm text-white dark:text-slate-100">
              Hire Now!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
