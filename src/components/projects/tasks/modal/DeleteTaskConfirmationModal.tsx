import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import React, { Fragment, ReactElement, useEffect } from 'react';
import { DarkType, TasksController } from '../hooks/types';

type Props = {
  tasks_controller: TasksController;
  set_dark: DarkType;
};

const DeleteTaskConfirmationModal: React.FC<Props> = ({
  tasks_controller,
  set_dark,
}: Props): ReactElement => {
  const dark_mode: boolean = set_dark.is_dark === 'dark' ? true : false;
  const handleDeleteTask = () => {
    // TODO: Call delete task function here
    tasks_controller.deleteTask();
    tasks_controller.setTaskToDelete(null);
    tasks_controller.setShowDeleteTaskModal(false);
  };

  useEffect((): void => {}, []);

  return (
    <Transition appear as={Fragment} show={tasks_controller.show_delete_task_modal}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => tasks_controller.setShowDeleteTaskModal(false)}
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
                  Delete Task!
                  <button
                    className={`flex rounded justify-center items-center hover:bg-gray-100 ${
                      dark_mode && `hover:bg-slate-600`
                    }`}
                    onClick={() => tasks_controller.setShowDeleteTaskModal(false)}
                  >
                    <XMarkIcon className="h-5" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                <div className="flex flex-col justify-center items-center my-2">
                  <ExclamationTriangleIcon className="h-7 stroke-red-500" />
                  <span
                    className={`font-[Lexend] text-sm font-light ${dark_mode && `text-slate-300`}`}
                  >
                    {`Do you really want to delete the task`}{' '}
                    <span className="text-red-500">{tasks_controller.task_to_delete?.title}</span>
                    {`? This action is irreversible!`}
                  </span>
                  <div className="flex flex-row w-full text-sm justify-between items-center mt-4">
                    <button
                      className="flex h-10 px-2 items-center justify-center rounded bg-amber-300 font-[Lexend] text-white text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => tasks_controller.setShowDeleteTaskModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex h-10 px-2 items-center justify-center rounded bg-red-400 font-[Lexend] text-white text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-red-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleDeleteTask}
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

export default DeleteTaskConfirmationModal;
