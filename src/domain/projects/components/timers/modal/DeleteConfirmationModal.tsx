import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment, ReactElement, useEffect } from 'react';
import { EmptyTimer, TimerController, TimersListController } from '../../../types/timers';

type Props = {
  timer_controller: TimerController;
  timers_list_controller: TimersListController;
  dark_mode: boolean;
};

const DeleteConfirmationModal: React.FC<Props> = ({
  timer_controller,
  timers_list_controller,
  dark_mode,
}: Props): ReactElement => {
  const handleDeleteTimer = () => {
    timers_list_controller.deleteTimer(timers_list_controller.timer_to_delete);
    timers_list_controller.setShowDeleteModal(false);
  };

  useEffect((): void => {
    timer_controller.setTimer(timers_list_controller.getSelectedTimer() ?? EmptyTimer);
  }, [timers_list_controller.getTimers()]);

  return (
    <Transition appear as={Fragment} show={timers_list_controller.show_delete_modal}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => timers_list_controller.setShowDeleteModal(false)}
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
                  Delete Timer!
                  <button
                    className={`flex rounded hover:bg-gray-100 ${
                      dark_mode && `hover:bg-slate-600`
                    }`}
                    onClick={() => timers_list_controller.setShowDeleteModal(false)}
                  >
                    <XMarkIcon className="h-7" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                <div className="flex flex-col justify-center items-center my-4">
                  <ExclamationTriangleIcon className="h-10 stroke-red-500" />
                  <span
                    className={`font-[Lexend] text-lg font-light ${dark_mode && `text-slate-300`}`}
                  >
                    {`Are you sure about deleting`}{' '}
                    <span className="text-red-500">
                      {
                        timers_list_controller.getSingleTimer(
                          timers_list_controller.timer_to_delete,
                        )?.title
                      }
                    </span>
                    {`? This action is irreversible!`}
                  </span>
                  <div className="flex flex-row w-full justify-between items-center mt-4">
                    <button
                      className="flex h-12 px-4 items-center justify-center rounded bg-amber-300 font-[Lexend] text-white text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => timers_list_controller.setShowDeleteModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex h-12 px-4 items-center justify-center rounded bg-red-400 font-[Lexend] text-white text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-red-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleDeleteTimer}
                    >
                      Delete
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

export default DeleteConfirmationModal;
