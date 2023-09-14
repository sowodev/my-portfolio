import { Dialog } from '@headlessui/react';
import React, { FC, ReactElement } from 'react';

interface MoreDetailsModalPanelDevelopProps {
  // TODO
  dark?: boolean;
  closeModal: () => void;
}

const MoreDetailsModalPanelDevelop: FC<MoreDetailsModalPanelDevelopProps> = ({
  dark,
  closeModal,
}: MoreDetailsModalPanelDevelopProps): ReactElement => {
  const title: string = 'Design and Development';

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
      <h1>Under Implementation!</h1>
    </>
  );
};

export default MoreDetailsModalPanelDevelop;
