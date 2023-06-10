import { TimersMockedData } from "./TimersMockedData";
import { ClockIcon, TrashIcon } from "@heroicons/react/24/outline";

const TimersList: React.FC = function timersList() {
  return (
    <div className="flex h-full basis-[30%] font-[Lexend] justify-center items-center">
      <div className="flex flex-col w-[90%] h-4/5 py-4 gap-4 border border-gray-300 rounded justify-around items-center dark:border-gray-700">
        <span className="text-4xl dark:text-white">Timers List</span>
        <ul className="flex flex-col w-full h-full px-12 overflow-y-scroll gap-4">
          {TimersMockedData.map((timer) => (
            <li
              key={timer.id}
              className="flex w-full h-fit rounded-lg border border-gray-300 dark:border-gray-700"
            >
              <div className="flex flex-row w-full h-12 font-light rounded-lg justify-between items-center">
                <button className="flex w-[13%] h-full border-e-[1px] border-gray-300 justify-center items-center rounded-s-lg hover:bg-emerald-100 dark:border-gray-700 dark:hover:bg-green-400">
                  <ClockIcon className="w-5 h-5 dark:stroke-gray-300" />
                </button>
                <button
                  className={`flex w-[74%] h-full hover:bg-gray-100 justify-start items-center indent-4 ${
                    timer.id === 1 && "bg-gray-200"
                  } dark:hover:bg-gray-700 dark:text-gray-300`}
                >
                  {timer.name}
                </button>
                <button className="flex w-[13%] h-full border-s-[1px] border-gray-300 rounded-e-lg justify-center items-center hover:bg-red-200 dark:border-gray-700 dark:hover:bg-red-400">
                  <TrashIcon className="w-5 h-5 dark:stroke-gray-300" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="bg-gradient-to-b from-cyan-400 to-sky-400 text-white p-4 rounded transition duration-300 ease-in-out hover:scale-110 hover:from-cyan-500 hover:to-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          Add New Timer
        </button>
      </div>
    </div>
  );
};

export default TimersList;
