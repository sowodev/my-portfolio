import { ReactElement } from 'react';
import { Task, TasksController, TasksColumn, PriorityType } from './hooks/types';
import ColumnContainer from './ColumnContainer';

type QuadrantProps = {
  color: PriorityType;
  tasks_columns: TasksColumn;
  tasks_controller: TasksController;
};

const Quadrant: React.FC<QuadrantProps> = function quandrant({
  color,
  tasks_columns,
  tasks_controller,
}: QuadrantProps): ReactElement {
  const tail_color: string =
    color === 'yellow'
      ? 'bg-[#ffed49]'
      : color === 'red'
      ? 'bg-[#ff867e]'
      : color === 'green'
      ? 'bg-[#8dff99]'
      : 'bg-[#ffb978]';
  return (
    <div className="flex flex-row w-[48%] h-[48%] bg-gray-100 border border-gray-400">
      <ColumnContainer
        key={0}
        column="To Do"
        color={color}
        tail_color={tail_color}
        tasks={tasks_columns['To Do']}
        tasks_controller={tasks_controller}
      />
      <ColumnContainer
        key={1}
        column="In Progress"
        color={color}
        tail_color={tail_color}
        tasks={tasks_columns['In Progress']}
        tasks_controller={tasks_controller}
      />
      <ColumnContainer
        key={2}
        column="Done"
        color={color}
        tail_color={tail_color}
        tasks={tasks_columns['Done']}
        tasks_controller={tasks_controller}
      />
    </div>
  );
};

export default Quadrant;
