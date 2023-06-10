import Quadrant from "./Quadrant";
import { ChevronUpIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Tasks = function tasks() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex relative w-[95%] h-[95%] mt-2 border-s-4 border-b-4 border-dashed border-gray-300">
        <span className="flex absolute text-lg -left-[4.5rem] h-fit w-fit font-[Lexend] transform -rotate-90 self-center">
          IMPORTANT
        </span>
        <ChevronUpIcon className="absolute -top-3 -left-4 w-7 h-7 stroke-gray-300 stroke-[3]" />
        <ChevronLeftIcon className="absolute -bottom-4 left-2 w-7 h-7 stroke-gray-300 stroke-[3]" />
        <ChevronLeftIcon className="absolute -bottom-4 -right-[0.6rem] w-7 h-7 stroke-gray-300 stroke-[3]" />
        <div className="grid w-full h-full pb-2 grid-cols-2 place-items-center">
          <Quadrant color="red" />
          <Quadrant color="orange" />
          <Quadrant color="yellow" />
          <Quadrant color="green" />
        </div>
      </div>
      <div className="flex w-full h-[5%] place-content-center">
        <span className="font-[Lexend] text-lg">URGENT</span>
      </div>
    </div>
  );
};

export default Tasks;
