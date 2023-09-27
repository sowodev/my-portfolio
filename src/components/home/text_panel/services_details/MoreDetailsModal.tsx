import { Dialog, Transition } from '@headlessui/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../../../commom/context/GlobalContext';

const MoreDetailsModal: React.FC = function moreDetailsModal(): React.ReactElement {
  const { set_details, set_dark } = useContext(GlobalContext);
  const dark: boolean = set_dark.is_dark === 'dark' ? true : false;

  const closeModal = (): void => {
    set_details.setOpenDetailsDialog(false);
  };

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
                <Dialog.Title
                  as="h4"
                  className={`flex font-[Lexend] text-lg font-medium leading-6 text-gray-800 justify-between items-center ${
                    dark && 'text-white'
                  }`}
                >
                  More Details!
                  <button
                    className={`flex rounded px-2 py-1 hover:bg-slate-100 ${
                      dark && `hover:bg-slate-600`
                    }`}
                    onClick={closeModal}
                  >
                    ✖
                  </button>
                </Dialog.Title>
                <span className={`font-[Lexend] text-slate-800  ${dark && `text-white`}`}>
                  Why?
                </span>
                <ol
                  className={`flex flex-col bg-slate-100 font-light rounded-lg text-justify p-3 list-decimal list-inside gap-3 font-[Lexend] text-slate-800 ${
                    dark && `bg-slate-600 text-white`
                  }`}
                >
                  <li>
                    Do you have a web application idea and need a professional to transform your
                    idea into software, from the design to the development?
                  </li>
                  <li>
                    Do you need to develop some extra services for your existing web application?
                  </li>
                  <li>
                    Do you have any awesome web application idea and want to check its viability?
                  </li>
                  <li>
                    Do you have a web application and need to fix some bugs or optimize its
                    performance?
                  </li>
                  <li>We have the solution for you, contact us!</li>
                </ol>
                <span className={`font-[Lexend] text-slate-800  ${dark && `text-white`}`}>
                  How?
                </span>
                <ol
                  className={`flex flex-col bg-slate-100 font-light rounded-lg text-justify p-3 list-decimal list-inside gap-3 font-[Lexend] text-slate-800 ${
                    dark && `bg-slate-600 text-white`
                  }`}
                >
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
                  <li>Fill the quick form with a brief description of your demand.</li>
                  <li>We are going to repply with some ideas for the best cost-benefit options.</li>
                  <li>
                    Then we can schedule a call or make another form of contact to discuss the
                    details.
                  </li>
                  <li>
                    Your high quality software will be shipped within the agreed time and budget.
                  </li>
                </ol>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MoreDetailsModal;
