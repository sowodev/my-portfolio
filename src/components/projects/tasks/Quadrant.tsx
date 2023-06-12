import { Task } from "./MockedTasksData";
import TaskCard from "./TaskCard";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

type QuadrantProps = {
  color: string;
  tasks: Task[];
};

const Quadrant: React.FC<QuadrantProps> = function quandrant({ color, tasks }) {
  const tail_color =
    color === "yellow"
      ? "bg-[#ffed49]"
      : color === "red"
      ? "bg-[#ff867e]"
      : color === "green"
      ? "bg-[#8dff99]"
      : "bg-[#ffb978]";
  return (
    <div className="flex flex-row w-[48%] h-[48%] bg-gray-100 border border-gray-400">
      <div className="flex flex-col relative h-full basis-1/3">
        <div
          className={`flex w-full h-[10%] justify-center items-center border-e border-b border-gray-400 border-dashed ${tail_color}`}
        >
          <span className="h-fit w-fit font-[Lexend]">To Do</span>
        </div>
        <div className="w-full h-[90%] border-e border-gray-400 border-dashed overflow-y-auto">
          <div className="flex flex-col w-full h-fit my-2 gap-2 justify-center items-center">
            {tasks.map(
              (task: Task, index: number) =>
                task.status === "To Do" && <TaskCard key={index} task={task} />
            )}
          </div>
        </div>
        <button className="absolute bg-cyan-300 bottom-2 left-2 h-8 w-8 rounded-3xl drop-shadow-md hover:bg-cyan-400">
          <PlusSmallIcon className="w-full h-full stroke-gray-100" />
        </button>
      </div>
      <div className="flex flex-col h-full basis-1/3">
        <div
          className={`flex w-full h-[10%] justify-center items-center border-e border-b border-gray-400 border-dashed ${tail_color}`}
        >
          <span className="h-fit w-fit font-[Lexend]">In Progress</span>
        </div>
        <div className="w-full h-[90%] border-e border-gray-400 border-dashed overflow-y-auto">
          <div className="flex flex-col w-full h-fit my-2 gap-2 justify-center items-center">
            {tasks.map(
              (task: Task, index: number) =>
                task.status === "In Progress" && (
                  <TaskCard key={index} task={task} />
                )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full basis-1/3">
        <div
          className={`flex w-full h-[10%] justify-center items-center border-b border-gray-400 border-dashed ${tail_color}`}
        >
          <span className="h-fit w-fit font-[Lexend]">Done</span>
        </div>
        <div className="w-full h-[90%] overflow-y-auto">
          <div className="flex flex-col w-full h-fit my-2 gap-2 justify-center items-center">
            {tasks.map(
              (task: Task, index: number) =>
                task.status === "Done" && <TaskCard key={index} task={task} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quadrant;
