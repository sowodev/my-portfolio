import { ReactElement } from 'react';
import { Task, TasksController } from './hooks/types';
import TaskCard from './TaskCard';
import AddTaskBtn from './AddTaskBtn';
import { Droppable, DroppableProvided } from '@hello-pangea/dnd';
import { v4 as uuidv4 } from 'uuid';

type ColumnContainerProps = {
  column_index: number;
  column: string;
  color: string;
  tasks: Task[];
  tasks_controller: TasksController;
};

const ColumnContainer: React.FC<ColumnContainerProps> = function columnContainer({
  column_index,
  column,
  color,
  tasks,
  tasks_controller,
}: ColumnContainerProps): ReactElement {
  return (
    <div className="flex flex-col relative h-full basis-1/3">
      <div
        className={
          column === 'Done'
            ? `flex w-full h-[10%] justify-center items-center border-b border-gray-400 border-dashed ${color}`
            : `flex w-full h-[10%] justify-center items-center border-e border-b border-gray-400 border-dashed ${color}`
        }
      >
        <span className="h-fit w-fit font-[Lexend]">{column}</span>
      </div>

      {/* Start Droppable Column */}
      <Droppable droppableId={uuidv4()}>
        {(provided: DroppableProvided): ReactElement => (
          <div
            className={
              column === 'Done'
                ? `flex flex-col py-2 gap-2 justify-start items-center w-full h-[90%] overflow-y-auto`
                : `flex flex-col py-2 gap-2 justify-start items-center w-full h-[90%] border-e border-gray-400 border-dashed overflow-y-auto`
            }
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map(
              (task: Task, index: number): ReactElement => (
                <TaskCard key={task.id} index={index} task={task} color={color} />
              ),
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {/* End Droppable Column */}

      {column === 'To Do' && <AddTaskBtn tasks_controller={tasks_controller} />}
    </div>
  );
};

export default ColumnContainer;
