import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../../../commom/context/GlobalContext';
import MoreDetailsModalPanelDevelop from './MoreDetailsModalPanelDevelop';
import MoreDetailsModalPanelFix from './MoreDetailsModalPanelFix';
import MoreDetailsModalPanelConsult from './MoreDetailsModalPanelConsult';

const MoreDetailsModal: React.FC = function moreDetailsModal(): React.ReactElement {
  const { set_details, set_dark } = useContext(GlobalContext);
  const dark: boolean = set_dark.is_dark === 'dark' ? true : false;

  const closeModal = (): void => {
    set_details.setOpenDetailsDialog(false);
  };

  const more_details_modal_map: Map<string, React.ReactElement> = new Map([
    ['develop', <MoreDetailsModalPanelDevelop dark={dark} closeModal={closeModal} />],
    ['fix', <MoreDetailsModalPanelFix dark={dark} closeModal={closeModal} />],
    ['consult', <MoreDetailsModalPanelConsult dark={dark} closeModal={closeModal} />],
  ]);

  return (
    <Transition appear as={Fragment} show={set_details.open_details_dialog}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  dark
                    ? `w-full max-w-md transform overflow-hidden rounded-lg bg-slate-700 p-6 text-left align-middle shadow-xl transition-all`
                    : `w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`
                }
              >
                {more_details_modal_map.get(set_details.details_modal)}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MoreDetailsModal;
