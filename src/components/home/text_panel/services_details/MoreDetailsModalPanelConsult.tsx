import { Dialog } from '@headlessui/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import React, { FC, ReactElement } from 'react';

interface MoreDetailsModalPanelDiffProps {
  dark?: boolean;
  closeModal: () => void;
}

const MoreDetailsModalPanelDiff: FC<MoreDetailsModalPanelDiffProps> = ({
  dark,
  closeModal,
}: MoreDetailsModalPanelDiffProps): ReactElement => {
  const title: string = 'Consulting';

  return (
    <>
      <Dialog.Title
        as="h4"
        className={`flex font-[Lexend] text-lg font-medium leading-6 text-gray-800 justify-between items-center ${
          dark && 'text-white'
        }`}
      >
        {title}
        <button className="flex rounded px-2 py-1 hover:bg-slate-100" onClick={closeModal}>
          ✖
        </button>
      </Dialog.Title>
      <span className="font-[Lexend] text-slate-800">Why?</span>
      <ol className="flex flex-col bg-slate-100 rounded-lg text-justify p-3 list-decimal list-inside gap-3 font-[Lexend] text-slate-800">
        <li>Do you have any awesome web application idea and want to check its viability?</li>
        <li>Do you need support for taking the best decision for your web application?</li>
        <li>
          Get in touch with us for free, through the button:{' '}
          <button
            className="flex h-8 flex-row items-center justify-center gap-1 rounded bg-green-400"
            disabled
          >
            <EnvelopeIcon className="ml-2 h-5 w-5 stroke-white" />
            <span className="mr-2 font-[Lexend] text-sm md:text-sm text-white dark:text-slate-100">
              Hire Now!
            </span>
          </button>
        </li>
      </ol>
      <span className="font-[Lexend] text-slate-800">How?</span>
      <ol className="flex flex-col bg-slate-100 rounded-lg text-justify p-3 list-decimal list-inside gap-3 font-[Lexend] text-slate-800">
        <li>Fill the quick form with a brief description of your demand.</li>
        <li>We are going to repply with our price for this job.</li>
        <li>Then we can schedule a call, and discuss the details.</li>
        <li>
          We are going to send you an awesome personalized report with our analysis and the best
          solutions for your web app.
        </li>
      </ol>
    </>
  );
};

export default MoreDetailsModalPanelDiff;
