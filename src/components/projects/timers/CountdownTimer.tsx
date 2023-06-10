import {
  ArrowPathIcon,
  PauseIcon,
  PlayIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const CountdownTimer: React.FC = function countdownTimer() {
  const [play, setPlay] = useState<boolean>(true);

  return (
    <div className="flex h-full basis-[70%] justify-center items-center">
      <div className="flex flex-col w-[90%] h-4/5 font-[Lexend] bg-gray-700 rounded-xl justify-center items-center">
        <div className="flex w-full basis-[10%] text-4xl text-white justify-center items-center">
          Countdown Timer
        </div>
        <div className="flex flex-col w-full basis-[90%] justify-center items-center gap-12">
          <div className="flex w-3/5 h-1/4 rounded-lg font-[digital-bold] text-green-400 text-9xl justify-center items-center border border-[#f5f5f538] bg-[#ffffff3f] dark:bg-[#ffffff19] dark:text-green-600">
            06:54:39
          </div>
          <div className="flex flex-row font-sans gap-8">
            <button className="p-2 bg-green-300 rounded-lg hover:bg-green-400 dark:bg-green-400 dark:hover:bg-green-500">
              {play ? (
                <PlayIcon className="w-5 h-5 m-2" />
              ) : (
                <PauseIcon className="w-5 h-5 m-2" />
              )}
            </button>
            <button className="p-2 bg-blue-300 rounded-lg hover:bg-blue-400 dark:bg-blue-400 dark:hover:bg-blue-500">
              <ArrowPathIcon className="w-5 h-5 m-2" />
            </button>
            <button className="p-2 bg-red-300 rounded-lg hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500">
              <TrashIcon className="w-5 h-5 m-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
