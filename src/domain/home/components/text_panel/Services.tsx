import AppContext from '@context/AppContext';
import HomeContext from '@domain/home/context/HomeContext';
import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { ReactElement, useContext } from 'react';

function Services(): ReactElement {
  const { contact_me } = useContext(AppContext);
  const { details_dialog } = useContext(HomeContext);

  return (
    <div className="flex flex-col h-full w-full justify-center md:justify-around items-center">
      <p className="text-justify text-lg md:text-2xl lg:text-4xl font-light text-slate-700 dark:text-white">
        Looking for someone to build or fix your web application?{' '}
      </p>
      <div className="flex flex-col w-full gap-12 p-5 items-center justify-between rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col text-slate-700 dark:text-white">
            <span className="sm:text-sm md:text-lg lg:text-2xl">
              Design and Develop Your Web Application
            </span>
            <span className="text-sm font-light text-slate-600 indent-4 dark:text-slate-200">
              ✅ We are going to bring your 😴 dream project to life!
            </span>
          </div>
          <div className="flex flex-col text-slate-700 dark:text-white">
            <span className="sm:text-sm md:text-lg lg:text-2xl">
              Fix and Optimize Your Web Application
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

        <div className="flex w-full justify-end items-center gap-5">
          <button
            className="flex px-4 py-3 flex-row items-center justify-center gap-1 rounded bg-amber-300 duration-300 ease-in-out hover:bg-amber-400 hover:shadow-md lg:hover:shadow-lg"
            onClick={(): void => {
              details_dialog.setOpen(true);
            }}
          >
            <ExclamationCircleIcon className="h-6 w-6 stroke-slate-700 dark:stroke-white" />
            <span className="text-sm md:text-base text-slate-700 dark:text-slate-100">
              More Details!
            </span>
          </button>
          <button
            className="flex px-4 py-3 flex-row items-center justify-center gap-1 rounded bg-green-400 duration-300 ease-in-out hover:bg-green-500 hover:shadow-md lg:hover:shadow-lg"
            onClick={(): void => contact_me.setOpenDialog(true)}
          >
            <EnvelopeIcon className="h-6 w-6 stroke-slate-700 dark:stroke-white" />
            <span className="text-sm md:text-base text-slate-700 dark:text-slate-100">
              Hire Now!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
