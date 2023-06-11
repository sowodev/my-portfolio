import { Task } from "./MockedTasksData";

type TaskProp = {
  task: Task;
};

const TaskCard: React.FC<TaskProp> = function taskCard({ task }) {
  return (
    <div className="min-h-[5.2rem] w-[90%] bg-white">
      <span>{task.title}</span>
    </div>
  );
};

export default TaskCard;
