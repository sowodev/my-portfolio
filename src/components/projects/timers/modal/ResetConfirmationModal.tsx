import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import React, { Fragment, ReactElement } from 'react';
import { TimerController } from '../hooks/types';

type Props = {
  timer_controller: TimerController;
  dark_mode: boolean;
};

const ResetConfirmationModal: React.FC<Props> = ({
  timer_controller,
  dark_mode,
}: Props): ReactElement => {
  const handleResetTimer = (): void => {
    timer_controller.resetTimer();
    timer_controller.setShowResetModal(false);
  };

  return (
    <Transition appear as={Fragment} show={timer_controller.show_reset_modal}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={(): void => timer_controller.setShowResetModal(false)}
      >
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
                  dark_mode
                    ? `w-full max-w-md transform overflow-hidden rounded-lg bg-slate-700 p-6 text-left align-middle shadow-xl transition-all`
                    : `w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`
                }
              >
                <Dialog.Title
                  as="div"
                  className={`flex flex-row font-[Lexend] text-lg font-medium leading-6 text-gray-900 justify-between ${
                    dark_mode && 'text-white'
                  }`}
                >
                  Reset Timer!
                  <button
                    className={`flex rounded hover:bg-gray-100 ${
                      dark_mode && `hover:bg-slate-600`
                    }`}
                    onClick={(): void => timer_controller.setShowResetModal(false)}
                  >
                    <XMarkIcon className="h-7" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                <div className="flex flex-col justify-center items-center my-4">
                  <ExclamationTriangleIcon className="h-10 stroke-blue-500" />
                  <span
                    className={`font-[Lexend] text-lg font-light ${dark_mode && `text-slate-300`}`}
                  >
                    Do you really want to Reset this timer?
                  </span>
                  <div className="flex flex-row w-full justify-between items-center mt-4">
                    <button
                      className="flex h-12 px-4 items-center justify-center rounded bg-amber-300 font-[Lexend] text-white text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={(): void => timer_controller.setShowResetModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex h-12 px-4 items-center justify-center rounded bg-sky-400 font-[Lexend] text-white text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleResetTimer}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                {/* The Form Ends Here!!! */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ResetConfirmationModal;
