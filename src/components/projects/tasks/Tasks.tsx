import { DragDropContext } from '@hello-pangea/dnd';
import { ChevronLeftIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { FC, ReactElement } from 'react';
import Quadrant from './Quadrant';
import { TasksController } from './hooks/types';
import useTasks from './hooks/useTasks';
import DeleteTaskConfirmationModal from './modal/DeleteTaskConfirmationModal';
import EditModalWorkingOn from './modal/EditModalWorkingOn';
import TaskModal from './modal/TaskModal';

const Tasks: FC = function tasks(): ReactElement {
  const tasks_controller: TasksController = useTasks();

  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;

    // DroppableId is in the format of: column|color ex: 'To Do|red'
    const start_drag: string[] = source.droppableId.split('|');
    const finish_drag: string[] = destination.droppableId.split('|');

    if (
      start_drag[0] === finish_drag[0] &&
      start_drag[1] === finish_drag[1] &&
      source.index !== destination.index
    ) {
      // If the user is reordering tasks within the same column
      tasks_controller.reorderTasks(start_drag[0], start_drag[1], source.index, destination.index);
    }

    if (start_drag[0] !== finish_drag[0] || start_drag[1] !== finish_drag[1]) {
      // If the user is moving a task to a different column
      tasks_controller.moveTask(
        start_drag[0],
        finish_drag[0],
        start_drag[1],
        finish_drag[1],
        source.index,
        destination.index,
      );
    }

    return;
  };

  return (
    <div className="flex flex-col w-full h-full max-w-screen max-h-screen justify-center items-center">
      <div className="flex relative w-[95%] h-[95%] mt-2 border-s-[3px] border-b-[3px] lg:border-s-4 lg:border-b-4 border-dashed border-gray-300 dark:border-slate-600">
        <span className="flex absolute text-lg -left-[4.5rem] h-fit w-fit font-[Lexend] transform -rotate-90 self-center dark:text-white">
          IMPORTANT
        </span>
        <ChevronUpIcon className="absolute -top-3 -left-4 w-7 h-7 stroke-gray-300 stroke-[1] lg:stroke-[3] md:stroke-[2] dark:stroke-slate-600" />
        <ChevronLeftIcon className="absolute -bottom-4 left-2 w-7 h-7 stroke-gray-300 stroke-[1] lg:stroke-[3] md:stroke-[2] dark:stroke-slate-600" />
        <ChevronLeftIcon className="absolute -bottom-4 -right-[0.6rem] w-7 h-7 stroke-gray-300 stroke-[1] lg:stroke-[3] md:stroke-[2] dark:stroke-slate-600" />
        <div className="flex flex-wrap w-full h-full pb-2 gap-x-4 justify-center items-center">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Quadrant
              color="red"
              tasks_columns={tasks_controller.tasks.get('red') ?? { '': [] }}
              tasks_controller={tasks_controller}
            />
            <Quadrant
              color="orange"
              tasks_columns={tasks_controller.tasks.get('orange') ?? { '': [] }}
              tasks_controller={tasks_controller}
            />
            <Quadrant
              color="yellow"
              tasks_columns={tasks_controller.tasks.get('yellow') ?? { '': [] }}
              tasks_controller={tasks_controller}
            />
            <Quadrant
              color="green"
              tasks_columns={tasks_controller.tasks.get('green') ?? { '': [] }}
              tasks_controller={tasks_controller}
            />
          </DragDropContext>
        </div>
      </div>
      <div className="flex w-full h-[5%] place-content-center">
        <span className="font-[Lexend] text-lg dark:text-white">URGENT</span>
      </div>
      <TaskModal tasks_controller={tasks_controller} />
      <DeleteTaskConfirmationModal tasks_controller={tasks_controller} />
      <EditModalWorkingOn tasks_controller={tasks_controller} />
    </div>
  );
};

export default Tasks;
