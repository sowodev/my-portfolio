import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { Fragment, ReactElement, useEffect } from 'react';
import { DarkType, TasksController } from '../hooks/types';

type Props = {
  tasks_controller: TasksController;
  set_dark: DarkType;
};

const EditModalWorkingOn: React.FC<Props> = ({
  tasks_controller,
  set_dark,
}: Props): ReactElement => {
  const dark_mode: boolean = set_dark.is_dark === 'dark' ? true : false;
  const handleDeleteTimer = () => {
    tasks_controller.setShowEditTaskModal(false);
  };

  useEffect((): void => {}, []);

  return (
    <Transition appear as={Fragment} show={tasks_controller.show_edit_task_modal}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => tasks_controller.setShowEditTaskModal(false)}
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
                    ? `w-full max-w-md transform overflow-hidden bg-slate-700 p-4 text-left align-middle shadow-xl transition-all`
                    : `w-full max-w-md transform overflow-hidden bg-white p-4 text-left align-middle shadow-xl transition-all`
                }
              >
                <Dialog.Title
                  as="div"
                  className={`flex flex-row font-[Lexend] leading-6 text-gray-900 justify-between ${
                    dark_mode && 'text-white'
                  }`}
                >
                  Working On Editing Tasks!
                  <button
                    className={`flex p-2 rounded justify-center items-center hover:bg-gray-100 ${
                      dark_mode && `hover:bg-slate-600`
                    }`}
                    onClick={() => tasks_controller.setShowEditTaskModal(false)}
                  >
                    <XMarkIcon className="h-5" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                <div className="flex flex-col justify-center items-center my-2">
                  <span
                    className={`font-[Lexend] text-sm font-light ${dark_mode && `text-slate-300`}`}
                  >
                    {"Sorry, I'm still implementing this feature! Will be available soon!"}
                  </span>
                  <div className="flex flex-row w-full text-sm justify-end items-center mt-4">
                    <button
                      className="flex px-4 py-2 items-center justify-center rounded bg-emerald-400 font-[Lexend] text-white text-center transition duration-300 ease-in-out hover:bg-emerald-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleDeleteTimer}
                    >
                      Close
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

export default EditModalWorkingOn;
