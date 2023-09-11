import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React, { useContext } from 'react';
import { GlobalContext } from '../../commom/context/GlobalContext';

const Services: React.FC = function services(): React.ReactElement {
  const { set_dialog, set_details, set_dark } = useContext(GlobalContext);

  return (
    <div className="flex flex-col h-full w-full px-6 py-2">
      <div className="prose prose-slate mx-auto mt-4">
        <p className="mb-2 text-justify font-[Lexend] text-lg md:text-2xl lg:text-3xl font-bold dark:text-white">
          Looking for someone to build or fix your web application?{' '}
          <span className="text-amber-200 underline">Your search ends here.</span>
        </p>
      </div>
      <div className="flex flex-col h-full w-full gap-2 font-[Lexend]">
        <div className="flex basis-1/3 w-full">
          <div className="flex flex-col w-full h-full p-3 items-center justify-center rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
            <div className="flex flex-col w-full h-[65%] text-slate-700 dark:text-white">
              <span className="text-lg">Design and/or Develop Your Web Application</span>
              <span className="text-sm font-light indent-4 dark:text-slate-200">
                We are going to bring your 😴 dream projects to life!
              </span>
            </div>
            <div className="flex w-full h-[35%] justify-end items-center gap-2">
              <button
                className="flex h-8 flex-row items-center justify-center gap-1 rounded bg-amber-300 duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-md lg:hover:shadow-lg"
                onClick={(): void => set_details.setOpenDetailsDialog(true)}
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
                  Hire Us!
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 w-full">
          <div className="flex flex-col w-full h-full p-3 items-center justify-center rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
            <div className="flex flex-col w-full h-[65%] text-slate-700 dark:text-white">
              <span className="text-lg">Fix and/or Optimize Your Web Application</span>
              <span className="text-sm font-light indent-4 dark:text-slate-200">
                We are going to make your web app 🛡️safer, ⚡faster and 🍹smoother!
              </span>
            </div>
            <div className="flex w-full h-[35%] justify-end items-center gap-2">
              <button
                className="flex h-8 flex-row items-center justify-center gap-1 rounded bg-amber-300 duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-md lg:hover:shadow-lg"
                onClick={(): void => set_details.setOpenDetailsDialog(true)}
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
                  Hire Us!
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 w-full">
          <div className="flex flex-col w-full h-full p-3 items-center justify-center rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
            <div className="flex flex-col w-full h-[65%] text-slate-700 dark:text-white">
              <span className="text-lg">Consulting About Your Web Application</span>
              <span className="text-sm font-light indent-4 dark:text-slate-200">
                We are going to guide your softwares projects 🤓. So you can make more money 🤑!
              </span>
            </div>
            <div className="flex w-full h-[35%] justify-end items-center gap-2">
              <button
                className="flex h-8 flex-row items-center justify-center gap-1 rounded bg-amber-300 duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-md lg:hover:shadow-lg"
                onClick={(): void => set_details.setOpenDetailsDialog(true)}
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
                  Hire Us!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
