import { PlusSmallIcon } from '@heroicons/react/24/outline';
import { ReactElement } from 'react';
import { TasksController } from './hooks/types';

type Props = {
  tasks_controller: TasksController;
};

const AddTaskBtn: React.FC<Props> = function addTaskBtn({ tasks_controller }: Props): ReactElement {
  return (
    <button
      className="absolute bg-cyan-300 bottom-2 left-2 h-8 w-8 rounded-3xl drop-shadow-md hover:bg-cyan-400"
      onClick={() => tasks_controller.setShowTasksModal(true)}
    >
      <PlusSmallIcon className="w-full h-full stroke-gray-100" />
    </button>
  );
};

export default AddTaskBtn;
