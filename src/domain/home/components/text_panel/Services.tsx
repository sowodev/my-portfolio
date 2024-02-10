import AppContext from '@context/AppContext';
import HomeContext from '@domain/home/context/HomeContext';
import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { ReactElement, useContext } from 'react';

function Services(): ReactElement {
  const { contact_me } = useContext(AppContext);
  const { details_dialog } = useContext(HomeContext);

  return (
    <div className="flex flex-col h-full w-full justify-center md:justify-around items-center">
      <p className="text-justify text-lg md:text-2xl lg:text-4xl font-light text-slate-900 dark:text-white">
        &emsp;Building the Next Generation of Software on the Web!
      </p>
      <div className="flex flex-col relative w-full h-96 gap-2 p-2 items-center justify-between rounded-lg bg-slate-900">
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
          <div className="flex w-full h-[80%] px-4 pt-4">
            <div className="flex flex-col h-full w-[10%] gap-1 text-sm text-slate-500 border-e border-slate-500 justify-center items-center">
              <div>01</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
              <div>06</div>
              <div>07</div>
              <div>08</div>
              <div>09</div>
              <div>10</div>
            </div>
            <div className="flex flex-col h-full w-[90%] text-white text-sm gap-1 ps-4">
              <div className="text-slate-500">
                // To run the function bellow, press the Hire Now button!
              </div>
              <div>
                <span className="text-red-400">function</span>{' '}
                <span className="text-sky-300">generateSuccessfulBusiness</span>(
                <span className="text-amber-300">your_requirements</span>) {'{'}
              </div>
              <div>
                &emsp;<span className="text-red-400">let</span>&nbsp;
                <span className="text-green-300">project_results</span> ={' '}
                <span className="text-red-400">new</span>&nbsp;
                <span className="text-sky-300">Project</span>(
                <span className="text-amber-300">your_requirements</span>);
              </div>
              <br />
              <div>
                &emsp;<span className="text-sky-300">designTheRobustAndSecureApplication</span>(
                <span className="text-green-300">project_results</span>);
              </div>
              <div>
                &emsp;<span className="text-sky-300">buildAndDevelopAGreatProduct</span>(
                <span className="text-green-300">project_results</span>);
              </div>
              <div>
                &emsp;<span className="text-sky-300">testsForReliabilityAndConsistency</span>(
                <span className="text-green-300">project_results</span>);
              </div>
              <br />
              <div>
                &emsp;<span className="text-red-400">return</span>&nbsp;
                <span className="text-green-300">project_results</span>;
              </div>
              <div>{'}'}</div>
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
              More Details!
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
