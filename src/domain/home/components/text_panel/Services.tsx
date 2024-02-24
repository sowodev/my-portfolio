import AppContext from '@context/AppContext';
import HomeContext from '@domain/home/context/HomeContext';
import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { ReactElement, useContext } from 'react';

function Services(): ReactElement {
  const { contact_me } = useContext(AppContext);
  const { details_dialog } = useContext(HomeContext);

  return (
    <div className="flex flex-col h-full w-full justify-center md:justify-around items-center">
      <p className="flex mt-4 text-justify text-lg md:text-2xl lg:text-4xl font-light text-slate-900 dark:text-white">
        &emsp;Building the Next Generation of Software on the Web!
      </p>
      <div className="flex flex-col relative w-full h-[70%] gap-2 p-2 items-center justify-between rounded-lg bg-slate-900">
        <div className="flex absolute -top-[1px] h-px w-[95%] rounded-lg bg-gradient-to-r from-sky-300/30 via-sky-300 to-sky-300/30" />
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-[10%] justify-end">
            <div className="flex w-24 gap-2 justify-center items-center">
              <div className="flex h-[12px] w-[12px] rounded-full bg-green-300 hover:bg-green-400" />
              <div className="flex h-[12px] w-[12px] rounded-full bg-amber-300 hover:bg-amber-400" />
              <div className="flex h-[12px] w-[12px] rounded-full bg-red-400 hover:bg-red-500" />
            </div>
          </div>
          <div className="flex w-full h-[10%]">
            <div className="flex w-36 justify-center items-center">
              <div className="flex w-4/5 h-[90%] rounded bg-[#ffffff3f] border border-[#38bdf838] justify-center items-center">
                <span className="text-sky-400 text-xs">success.win</span>
              </div>
            </div>
          </div>
          <div className="flex min-w-full h-[80%] pt-4 ps-4 justify-start items-center overflow-x-auto overflow-y-hidden">
            <div className="flex">
              <div className="flex flex-col h-full w-full text-white text-sm ps-4">
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">01</span>
                  <span className="text-slate-500 ps-4 min-w-fit">
                    // To run the function bellow, press the Hire Now button!
                  </span>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">02</span>
                  <div className="flex w-full h-full ps-4 justify-start items-center">
                    <span className="text-red-400">function&nbsp;</span>
                    <span className="text-sky-300">generateSuccessfulBusiness</span>(
                    <span className="text-amber-300">your_requirements</span>
                    <span>)</span>
                    <span className="ms-2">{'{'}</span>
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">03</span>
                  <div className="flex w-full h-full ps-8 justify-start items-center">
                    <span className="text-red-400">let</span>&nbsp;
                    <span className="text-green-300">project_results</span>&nbsp;=&nbsp;
                    <span className="text-red-400">new</span>&nbsp;
                    <span className="text-sky-300">Project</span>(
                    <span className="text-amber-300">your_requirements</span>);
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">04</span>
                  <div className="flex w-full h-full ps-4 justify-start items-center"></div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">05</span>
                  <div className="flex w-full h-full ps-8 justify-start items-center">
                    <span className="text-sky-300">designRobustAndSecureApplication</span>(
                    <span className="text-green-300">project_results</span>);
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">06</span>
                  <div className="flex w-full h-full ps-8 justify-start items-center">
                    <span className="text-sky-300">buildAndDevelopAGreatProduct</span>(
                    <span className="text-green-300">project_results</span>);
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">07</span>
                  <div className="flex w-full h-full ps-8 justify-start items-center">
                    <span className="text-sky-300">testsForReliabilityAndConsistency</span>(
                    <span className="text-green-300">project_results</span>);
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">08</span>
                  <div className="flex w-full h-full ps-4 justify-start items-center"></div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">09</span>
                  <div className="flex w-full h-full ps-8 justify-start items-center">
                    <span className="text-red-400">return</span>&nbsp;
                    <span className="text-green-300">project_results</span>;
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-slate-700 pe-4 border-e border-slate-700">10</span>
                  <span className="ps-4">{'}'}</span>
                </div>
              </div>
            </div>
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
            <span className="text-sm md:text-base text-slate-900 dark:text-slate-100">
              Details!
            </span>
          </button>
          <button
            className="flex px-4 py-3 flex-row items-center justify-center gap-1 rounded bg-green-400 duration-300 ease-in-out hover:bg-green-500 hover:shadow-md lg:hover:shadow-lg"
            onClick={(): void => contact_me.setOpenDialog(true)}
          >
            <EnvelopeIcon className="h-6 w-6 stroke-slate-700 dark:stroke-white" />
            <span className="text-sm md:text-base text-slate-900 dark:text-slate-100">
              Hire Now!
            </span>
          </button>
        </div>
        <div className="flex absolute -bottom-[1px] h-px w-[95%] rounded-lg bg-gradient-to-r from-sky-300/30 via-sky-300 to-sky-300/30" />
      </div>
    </div>
  );
}

export default Services;
