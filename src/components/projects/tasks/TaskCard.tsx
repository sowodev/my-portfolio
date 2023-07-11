import { ChangeEvent, ReactElement } from 'react';
import { Task, TasksController } from './hooks/types';
import { Draggable, DraggableProvided } from '@hello-pangea/dnd';
import { ConvertDifficultiesFromNumsToSvgs } from './hooks/types';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Tooltip } from 'react-tooltip';

type TaskProps = {
  index: number;
  task: Task;
  tail_color: string;
  tasks_controller: TasksController;
};

const TaskCard: React.FC<TaskProps> = function taskCard({
  index,
  task,
  tail_color,
  tasks_controller,
}: TaskProps): ReactElement {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided: DraggableProvided): ReactElement => (
        <div
          className={
            task.status === 'Done'
              ? 'min-h-[6rem] mb-2 w-[90%] bg-gray-200'
              : 'min-h-[6rem] mb-2 w-[90%] bg-white hover:bg-slate-50'
          }
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex flex-row justify-start items-center h-full w-full">
            <div className={`flex h-full w-1 ${tail_color}`}></div>
            <div className="flex w-full h-full font-[Lexend] p-2 gap-2 justify-start items-start">
              <div className="flex flex-col w-full h-full">
                <div className="flex flex-col w-full basis-2/3">
                  <div className="flex w-full gap-2">
                    <input
                      className={`h-fit w-fit accent-gray-300 rounded-xl mt-1 cursor-pointer`}
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                        if (e.target.checked) {
                          //move task to 'Done'
                          tasks_controller.moveTaskToDone(task);
                        } else {
                          //move task to 'In Progress'
                          tasks_controller.moveTaskFromDone(task);
                        }
                      }}
                      defaultChecked={task.status === 'Done'}
                    />
                    <span className="font-light text-sm line-clamp-1">{task.title}</span>
                  </div>
                  <span className="font-light text-xs text-gray-500 line-clamp-2">
                    {task.description}
                  </span>
                </div>
                <div className="flex flex-row w-full basis-1/3 justify-center items-center">
                  <div className="h-full basis-1/2">
                    <span className="font-[Lexend] text-[0.7rem] font-light text-gray-400">
                      {new Date(task.due_date).toDateString()}
                    </span>
                  </div>
                  <div className="flex h-full basis-1/2 gap-2 justify-end items-center">
                    <button
                      onClick={(): void => {
                        //To delete a task we need to set the task to delete and then wait for the user to confirm the deletion
                        tasks_controller.setTaskToDelete(task);
                        tasks_controller.setShowDeleteTaskModal(true);
                      }}
                    >
                      <TrashIcon
                        className={
                          task.status === 'Done'
                            ? `h-[18px] stroke-red-400`
                            : `h-[18px] bg-gray-100 stroke-red-400`
                        }
                      />
                    </button>
                    <button onClick={(): void => tasks_controller.setShowEditTaskModal(true)}>
                      <PencilSquareIcon
                        className={
                          task.status === 'Done' ? `hidden` : `h-[18px] bg-gray-100 stroke-sky-400`
                        }
                      />
                    </button>

                    <img
                      data-tooltip-id="task-tooltip"
                      data-tooltip-content={`Difficulty: ${
                        task.difficulty.slice(0, 1).toUpperCase() +
                        task.difficulty.slice(1).replace('_', ' ')
                      }`}
                      data-tooltip-place="bottom"
                      className={
                        task.status === 'Done'
                          ? `h-[18px] cursor-default`
                          : `h-[18px] bg-gray-100 cursor-default`
                      }
                      src={`/imgs/projects/tasks/${
                        ConvertDifficultiesFromNumsToSvgs[task.difficulty]
                      }`}
                    />
                    <img
                      data-tooltip-id="task-tooltip"
                      data-tooltip-content={`Estimated Time: ${task.estimated_time} ${
                        task.time_type.slice(0, 1).toUpperCase() + task.time_type.slice(1)
                      }`}
                      data-tooltip-place="bottom"
                      className={
                        task.status === 'Done'
                          ? `h-[18px] cursor-default`
                          : `h-[18px] bg-gray-100 cursor-default`
                      }
                      src="/imgs/projects/tasks/hourglass.svg"
                    />
                  </div>
                </div>
                <Tooltip
                  className={'font-[Blinker] text-xs font-light rounded-none p-1'}
                  id="task-tooltip"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
