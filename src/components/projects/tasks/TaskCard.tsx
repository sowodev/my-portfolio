import { ReactElement } from 'react';
import { Task } from './hooks/types';
import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import { ConvertDifficultiesFromNumsToSvgs } from './hooks/types';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

type TaskProps = {
  index: number;
  task: Task;
  color: string;
};

const TaskCard: React.FC<TaskProps> = function taskCard({
  index,
  task,
  color,
}: TaskProps): ReactElement {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided: DraggableProvided): ReactElement => (
        <div
          className="min-h-[5.2rem] drop-shadow w-[90%] bg-white"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex flex-row justify-start items-center h-full w-full">
            <div className={`flex h-full w-1 ${color}`}></div>
            <div className="flex w-full h-full font-[Lexend] p-2 gap-2 justify-start items-start">
              <input className="rounded-xl mt-1 cursor-pointer" type="checkbox" />
              <div className="flex flex-col w-full h-full">
                <div className="flex flex-col w-full h-full">
                  <span className="font-light text-sm line-clamp-1">{task.title}</span>
                  <span className="font-light text-xs text-gray-500 line-clamp-2">
                    {task.description}
                  </span>
                </div>
                <div className="flex w-full h-fit gap-2 justify-end items-end">
                  <TrashIcon className={`h-4 bg-gray-100 rounded-sm stroke-red-500`} />
                  <PencilSquareIcon className={`h-4 bg-gray-100 rounded-sm stroke-sky-500`} />
                  <img
                    className="h-4 bg-gray-100 rounded-sm"
                    src={`/imgs/projects/tasks/${
                      ConvertDifficultiesFromNumsToSvgs[task.difficulty]
                    }`}
                  />
                  <img
                    className="h-4 bg-gray-100 rounded-sm"
                    src="/imgs/projects/tasks/hourglass.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
