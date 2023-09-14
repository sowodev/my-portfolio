import { Dialog } from '@headlessui/react';
import React, { FC, ReactElement } from 'react';

interface MoreDetailsModalPanelDiffProps {
  // TODO
  dark?: boolean;
}

const MoreDetailsModalPanelDiff: FC<MoreDetailsModalPanelDiffProps> = ({
  dark,
}: MoreDetailsModalPanelDiffProps): ReactElement => {
  return (
    <Dialog.Panel
      className={
        dark
          ? `w-full max-w-md transform overflow-hidden rounded-lg bg-slate-700 p-6 text-left align-middle shadow-xl transition-all`
          : `w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`
      }
    >
      <Dialog.Title
        as="h4"
        className={`font-[Lexend] text-lg font-medium leading-6 text-gray-900 ${
          dark && 'text-white'
        }`}
      >
        {'More Details!'}
      </Dialog.Title>

      {/* The Form Starts Here!!! */}
      {<h1>Under Implementation!</h1>}

      {/* The Form Ends Here!!! */}
    </Dialog.Panel>
  );
};

export default MoreDetailsModalPanelDiff;
