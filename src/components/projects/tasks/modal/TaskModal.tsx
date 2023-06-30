import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues, TasksController } from '../hooks/types';
import InputTitle from './InputTitle';
import InputDescription from './InputDescription';
import InputDueDate from './InputDueDate';
import InputEstimatedTime from './InputEstimatedTime';

type Props = {
  tasks_controller: TasksController;
};

const TaskModal: React.FC<Props> = function taskModal({ tasks_controller }: Props): ReactElement {
  // Form Validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();
  const dark_mode = false;
  return (
    <Transition appear as={Fragment} show={tasks_controller.show_tasks_modal}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
                  Create Task!
                  <button
                    className={`flex rounded hover:bg-gray-100 ${
                      dark_mode && `hover:bg-slate-600`
                    }`}
                    onClick={(): void => tasks_controller.setShowTasksModal(false)}
                  >
                    <XMarkIcon className="h-7" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                <div className="flex flex-col justify-center items-center my-4">
                  <InputTitle register={register} errors={errors} dark_mode={dark_mode} />
                  <InputDescription register={register} errors={errors} dark_mode={dark_mode} />
                  <InputEstimatedTime register={register} errors={errors} dark_mode={dark_mode} />
                  <InputDueDate register={register} errors={errors} dark_mode={dark_mode} />
                  <div className="flex flex-row w-full font-[Lexend] text-white justify-between items-center mt-4">
                    <button
                      className="flex h-12 px-4 items-center justify-center rounded bg-amber-300 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={(): void => tasks_controller.setShowTasksModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex h-12 px-4 items-center justify-center rounded bg-sky-400 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {}}
                    >
                      Create
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

export default TaskModal;
