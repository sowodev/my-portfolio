import { ArrowPathIcon, PauseIcon, PlayIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const CountdownTimer: React.FC = function countdownTimer() {
  const [play, setPlay] = useState<boolean>(true);

  return (
    <div className="flex h-full basis-[70%] justify-center items-center">
      <div className="flex flex-col w-[90%] h-4/5 font-[Lexend] bg-gray-700 rounded-xl justify-center items-center dark:bg-slate-700">
        <div className="flex w-full basis-[10%] text-4xl text-white justify-center items-center">
          Countdown Timer
        </div>
        <div className="flex flex-col w-full basis-[90%] justify-center items-center gap-12">
          <div className="flex w-3/5 h-1/4 px-4 rounded-lg font-[digital-bold] text-green-400 border border-[#f5f5f538] bg-[#ffffff3f] dark:bg-[#ffffff19] dark:text-green-600">
            <div className="flex flex-row w-full h-full justify-center items-center">
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">803</span>
                <span className="font-[Lexend] text-xs">Days</span>
              </div>
              <span className="text-7xl h-fit w-fit mb-4">:</span>
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">07</span>
                <span className="font-[Lexend] text-xs">Hours</span>
              </div>
              <span className="text-7xl h-fit w-fit mb-4">:</span>
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">55</span>
                <span className="font-[Lexend] text-xs">Minutes</span>
              </div>
              <span className="text-7xl h-fit w-fit mb-4">:</span>
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">27</span>
                <span className="font-[Lexend] text-xs">Seconds</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-sans gap-8">
            <button className="px-4 h-12 bg-green-300 rounded-lg hover:bg-green-400 dark:bg-green-400 dark:hover:bg-green-500">
              {play ? <PlayIcon className="w-5 h-5" /> : <PauseIcon className="w-5 h-5" />}
            </button>
            <button className="px-4 h-12 bg-blue-300 rounded-lg hover:bg-blue-400 dark:bg-blue-400 dark:hover:bg-blue-500">
              <ArrowPathIcon className="w-5 h-5" />
            </button>
            <button className="px-4 h-12 bg-red-300 rounded-lg hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500">
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
