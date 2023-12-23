import AppContext from '@context/AppContext';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FC, Fragment, ReactElement, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { DifficultyType, FormValues, Task, TasksController, TimeType } from '../../../types/tasks';
import InputDescription from './InputDescription';
import InputDifficulty from './InputDifficulty';
import InputDueDate from './InputDueDate';
import InputEstimatedTime from './InputEstimatedTime';
import InputTitle from './InputTitle';

type Props = {
  tasks_controller: TasksController;
};

const TaskModal: FC<Props> = ({ tasks_controller }: Props): ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();
  const { theme } = useContext(AppContext);
  const dark_mode: boolean = theme.mode === 'dark';
  const [due_date, setDueDate] = useState<Date | undefined>(undefined);
  const [difficulty, setDifficulty] = useState<DifficultyType>('very_easy');
  const [time_type, setTimeType] = useState<TimeType>('hours');

  const onSubmit = (data: FormValues): void => {
    const task: Task = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      due_date: due_date,
      estimated_time: data.estimated_time,
      time_type: time_type,
      status: 'To Do',
      priority: tasks_controller.new_task_priority,
      difficulty: difficulty,
      due_time: data.due_date_time,
    };

    tasks_controller.createTask(task);

    reset();
    setDueDate(undefined);
    tasks_controller.setShowTasksModal(false);
  };

  const closeModal = (): void => {
    reset();
    setDueDate(undefined);
    tasks_controller.setShowTasksModal(false);
  };

  const tail_color: string =
    tasks_controller.new_task_priority === 'yellow'
      ? 'bg-[#ffed49]'
      : tasks_controller.new_task_priority === 'red'
      ? 'bg-[#ff867e]'
      : tasks_controller.new_task_priority === 'green'
      ? 'bg-[#8dff99]'
      : 'bg-[#ffb978]';

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
                    ? `flex flex-col relative w-full pt-0 max-w-md transform overflow-hidden bg-slate-700 p-4 text-left align-middle shadow-xl transition-all`
                    : `flex flex-col relative w-full pt-0 max-w-md transform overflow-hidden bg-white p-4 text-left align-middle shadow-xl transition-all`
                }
              >
                <div className={`flex absolute top-0 left-0 w-full h-2 ${tail_color}`}></div>
                <Dialog.Title
                  as="div"
                  className={`flex mt-4 flex-row font-[Lexend] text-lg font-medium leading-6 text-gray-900 justify-between ${
                    dark_mode && 'text-white'
                  }`}
                >
                  Create Task!
                  <button
                    className={`flex p-2 rounded hover:bg-gray-100 justify-center items-center ${
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
                  <InputEstimatedTime
                    time_type={time_type}
                    setTimeType={setTimeType}
                    register={register}
                    errors={errors}
                    dark_mode={dark_mode}
                  />
                  <InputDueDate
                    due_date={due_date}
                    setDueDate={setDueDate}
                    register={register}
                    errors={errors}
                    dark_mode={dark_mode}
                  />
                  <InputDifficulty setDifficulty={setDifficulty} dark_mode={dark_mode} />
                  <div className="flex flex-row w-full font-[Lexend] text-white justify-between items-center mt-4">
                    <button
                      className="flex px-4 py-2 items-center justify-center bg-amber-300 font-light transition duration-300 ease-in-out hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      type="button"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex px-4 py-2 items-center justify-center bg-sky-400 font-light transition duration-300 ease-in-out hover:bg-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
