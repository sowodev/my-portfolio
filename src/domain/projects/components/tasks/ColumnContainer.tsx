import { Droppable, DroppableProvided } from '@hello-pangea/dnd';
import { ReactElement } from 'react';
import { PriorityType, Task, TasksController } from '../../types/tasks';
import AddTaskBtn from './AddTaskBtn';
import TaskCard from './TaskCard';

type ColumnContainerProps = {
  column: string;
  color: PriorityType;
  tail_color: string;
  tasks: Task[];
  tasks_controller: TasksController;
};

const ColumnContainer: React.FC<ColumnContainerProps> = function columnContainer({
  column,
  color,
  tail_color,
  tasks,
  tasks_controller,
}: ColumnContainerProps): ReactElement {
  return (
    <div className="flex flex-col relative h-full basis-1/3">
      <div
        className={
          column === 'Done'
            ? `flex w-full h-[10%] justify-center items-center border-b border-gray-400 border-dashed dark:border-gray-600 ${tail_color}`
            : `flex w-full h-[10%] justify-center items-center border-e border-b border-gray-400 border-dashed dark:border-gray-600 ${tail_color}`
        }
      >
        <span className="h-fit w-fit font-[Lexend]">{column}</span>
      </div>

      {/* Start Droppable Column */}
      <Droppable droppableId={column + '|' + color}>
        {(provided: DroppableProvided): ReactElement => (
          <div
            className={
              column === 'Done'
                ? `flex flex-col pt-2 justify-start items-center w-full h-[90%] overflow-y-auto`
                : `flex flex-col pt-2 justify-start items-center w-full h-[90%] border-e border-gray-400 border-dashed overflow-y-auto dark:border-gray-600`
            }
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map(
              (task: Task, index: number): ReactElement => (
                <TaskCard
                  key={task.id}
                  index={index}
                  task={task}
                  tail_color={tail_color}
                  tasks_controller={tasks_controller}
                />
              ),
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {/* End Droppable Column */}

      {column === 'To Do' && <AddTaskBtn tasks_controller={tasks_controller} color={color} />}
    </div>
  );
};

export default ColumnContainer;
