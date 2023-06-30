import { ReactElement } from 'react';
import { Task } from './MockedTasksData';
import { Draggable, DraggableProvided } from '@hello-pangea/dnd';

type TaskProps = {
  index: number;
  task: Task;
};

const TaskCard: React.FC<TaskProps> = function taskCard({ index, task }: TaskProps) {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="min-h-[5.2rem] drop-shadow w-[90%] bg-white"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{task.title}</span>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
