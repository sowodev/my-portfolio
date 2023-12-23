import { PlusSmallIcon } from '@heroicons/react/24/outline';
import { ReactElement } from 'react';
import { PriorityType, TasksController } from '../../types/tasks';

type Props = {
  tasks_controller: TasksController;
  color: PriorityType;
};

const AddTaskBtn: React.FC<Props> = function addTaskBtn({
  tasks_controller,
  color,
}: Props): ReactElement {
  return (
    <button
      className="absolute bg-cyan-300 bottom-2 left-2 h-8 w-8 rounded-3xl drop-shadow-md hover:bg-cyan-400 dark:bg-cyan-500 dark:hover:bg-cyan-600"
      onClick={(): void => {
        tasks_controller.setNewTaskPriority(color);
        tasks_controller.setShowTasksModal(true);
      }}
    >
      <PlusSmallIcon className="w-full h-full stroke-gray-100 dark:stroke-gray-700" />
    </button>
  );
};

export default AddTaskBtn;
