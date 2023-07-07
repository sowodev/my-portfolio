import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues, Task, TasksController } from '../hooks/types';
import InputTitle from './InputTitle';
import InputDescription from './InputDescription';
import InputDueDate from './InputDueDate';
import InputEstimatedTime from './InputEstimatedTime';
import { v4 as uuidv4 } from 'uuid';
import InputDifficulty from './InputDifficulty';

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

  const onSubmit = (data: FormValues): void => {
    const task: Task = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      due_date: data.due_date,
      estimated_time: data.estimated_time,
      status: 'To Do',
      priority: 'red',
      difficulty: 'easy',
      due_time: data.due_date_time,
    };

    tasks_controller.createTask(task);

    reset();
    tasks_controller.setShowTasksModal(false);
  };

  const closeModal = (): void => {
    reset();
    tasks_controller.setShowTasksModal(false);
  };

  return (
    <Transition appear as={Fragment} show={tasks_controller.show_tasks_modal}>
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
                  dark_mode
                    ? `w-full max-w-md transform overflow-hidden bg-slate-700 p-4 text-left align-middle shadow-xl transition-all`
                    : `w-full max-w-md transform overflow-hidden bg-white p-4 text-left align-middle shadow-xl transition-all`
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
                    className={`flex rounded hover:bg-gray-100 justify-center items-center ${
                      dark_mode && `hover:bg-slate-600`
                    }`}
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-5" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-center items-center my-2 gap-2"
                >
                  <InputTitle register={register} errors={errors} dark_mode={dark_mode} />
                  <InputDescription register={register} errors={errors} dark_mode={dark_mode} />
                  <InputEstimatedTime register={register} errors={errors} dark_mode={dark_mode} />
                  <InputDueDate register={register} errors={errors} dark_mode={dark_mode} />
                  <InputDifficulty dark_mode={dark_mode} />
                  <div className="flex flex-row w-full font-[Lexend] text-white justify-between items-center mt-4">
                    <button
                      className="flex h-10 px-2 items-center justify-center rounded bg-amber-300 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      type="button"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex h-10 px-2 items-center justify-center rounded bg-sky-400 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </form>
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
