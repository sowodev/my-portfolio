import Quadrant from "./Quadrant";
import { ChevronUpIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { TasksMockedData, Task } from "./MockedTasksData";
import { useState } from "react";

const tasksByPriority = (tasks: Task[]) => {
  const tasksByPriorityMap = new Map<string, Task[]>();
  tasksByPriorityMap.set("red", []);
  tasksByPriorityMap.set("orange", []);
  tasksByPriorityMap.set("yellow", []);
  tasksByPriorityMap.set("green", []);

  tasks.forEach((task) => {
    switch (task.priority) {
      case "red":
        tasksByPriorityMap.get("red")?.push(task);
        break;
      case "orange":
        tasksByPriorityMap.get("orange")?.push(task);
        break;
      case "yellow":
        tasksByPriorityMap.get("yellow")?.push(task);
        break;
      case "green":
        tasksByPriorityMap.get("green")?.push(task);
        break;
      default:
        break;
    }
  });

  return tasksByPriorityMap;
};

const Tasks = function tasks() {
  const [tasks_state, setTasks] = useState<Map<string, Task[]>>(
    tasksByPriority(TasksMockedData)
  );

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
          <Quadrant color="red" tasks={tasks_state.get("red") ?? []} />
          <Quadrant color="orange" tasks={tasks_state.get("orange") ?? []} />
          <Quadrant color="yellow" tasks={tasks_state.get("yellow") ?? []} />
          <Quadrant color="green" tasks={tasks_state.get("green") ?? []} />
        </div>
      </div>
      <div className="flex w-full h-[5%] place-content-center">
        <span className="font-[Lexend] text-lg">URGENT</span>
      </div>
    </div>
  );
};

export default Tasks;
