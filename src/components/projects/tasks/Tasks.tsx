import Quadrant from './Quadrant';
import { ChevronUpIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import React, { ReactElement, useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import TaskModal from './modal/TaskModal';
import { TasksController } from './hooks/types';
import useTasks from './hooks/useTasks';

const Tasks: React.FC = function tasks(): ReactElement {
  const tasks_controller: TasksController = useTasks();

  const handleDragEnd = (result: any) => {
    /*     if (!result.destination) return;

    const items = Array.from(tasks_state.get(result.source.droppableId) ?? []);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const newTasksState = new Map<string, Task[]>(tasks_state);
    newTasksState.set(result.source.droppableId, items);
    setTasks(newTasksState); */
  };

  return (
    <div className="flex flex-col w-full h-full max-w-screen max-h-screen justify-center items-center">
      <div className="flex relative w-[95%] h-[95%] mt-2 border-s-4 border-b-4 border-dashed border-gray-300">
        <span className="flex absolute text-lg -left-[4.5rem] h-fit w-fit font-[Lexend] transform -rotate-90 self-center">
          IMPORTANT
        </span>
        <ChevronUpIcon className="absolute -top-3 -left-4 w-7 h-7 stroke-gray-300 stroke-[3]" />
        <ChevronLeftIcon className="absolute -bottom-4 left-2 w-7 h-7 stroke-gray-300 stroke-[3]" />
        <ChevronLeftIcon className="absolute -bottom-4 -right-[0.6rem] w-7 h-7 stroke-gray-300 stroke-[3]" />
        <div className="flex flex-wrap w-full h-full pb-2 gap-x-4 justify-center items-center">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Quadrant
              color="red"
              tasks={tasks_controller.tasks.get('red') ?? []}
              tasks_controller={tasks_controller}
            />
            <Quadrant
              color="orange"
              tasks={tasks_controller.tasks.get('orange') ?? []}
              tasks_controller={tasks_controller}
            />
            <Quadrant
              color="yellow"
              tasks={tasks_controller.tasks.get('yellow') ?? []}
              tasks_controller={tasks_controller}
            />
            <Quadrant
              color="green"
              tasks={tasks_controller.tasks.get('green') ?? []}
              tasks_controller={tasks_controller}
            />
          </DragDropContext>
        </div>
      </div>
      <div className="flex w-full h-[5%] place-content-center">
        <span className="font-[Lexend] text-lg">URGENT</span>
      </div>
      <TaskModal tasks_controller={tasks_controller} />
    </div>
  );
};

export default Tasks;
