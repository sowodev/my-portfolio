import { ClockIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Timer, TimersListController } from './hooks/types';
import { ReactElement } from 'react';

type Props = {
  timers_list_controller: TimersListController;
};

const TimersList: React.FC<Props> = function timersList({
  timers_list_controller,
}: Props): ReactElement {
  const changeSelectedTimer = (timer_uuid: string) => {
    timers_list_controller.setSelectedTimer(timer_uuid);
  };

  return (
    <div className="flex h-full basis-[30%] font-[Lexend] justify-center items-center">
      <div className="flex flex-col w-[90%] h-4/5 py-4 gap-4 border border-gray-300 rounded items-center dark:border-gray-700">
        <span className="text-4xl dark:text-white">Timers List</span>
        <ul className="flex flex-col w-full h-4/5 px-12 overflow-y-scroll gap-4">
          {timers_list_controller.getTimers().map(
            (timer: Timer): ReactElement => (
              <li
                key={timer.uuid}
                className="flex w-full h-fit rounded-lg border border-gray-300 dark:border-gray-700"
              >
                <div className="flex flex-row w-full h-12 font-light rounded-lg justify-between items-center">
                  <button
                    className="flex w-[13%] h-full border-e-[1px] border-gray-300 justify-center items-center rounded-s-lg hover:bg-emerald-200 dark:border-gray-700 dark:hover:bg-green-700"
                    onClick={() => {
                      timers_list_controller.setToEdit(true);
                      timers_list_controller.setTimerToEdit(timer);
                      timers_list_controller.setShowModal(true);
                    }}
                  >
                    <ClockIcon className="w-5 h-5 dark:stroke-gray-300" />
                  </button>
                  <button
                    className={
                      timer.is_selected
                        ? `flex bg-gray-200 w-[74%] h-full justify-start items-center indent-4 dark:text-gray-300 cursor-not-allowed dark:bg-slate-700`
                        : `flex w-[74%] h-full hover:bg-gray-100 justify-start items-center indent-4 dark:hover:bg-slate-700 dark:text-gray-300`
                    }
                    onClick={() => changeSelectedTimer(timer.uuid)}
                    disabled={timer.is_selected}
                  >
                    {timer.title}
                  </button>
                  <button
                    className="flex w-[13%] h-full border-s-[1px] border-gray-300 rounded-e-lg justify-center items-center hover:bg-red-300 dark:border-gray-700 dark:hover:bg-red-400"
                    onClick={() => {
                      timers_list_controller.setShowDeleteModal(true);
                      timers_list_controller.setTimerToDelete(timer.uuid);
                    }}
                  >
                    <TrashIcon className="w-5 h-5 dark:stroke-gray-300" />
                  </button>
                </div>
              </li>
            ),
          )}
        </ul>
        <button
          className=" bg-sky-400 text-white h-12 px-4 rounded transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => timers_list_controller.setShowModal(true)}
        >
          Add Timer
        </button>
      </div>
    </div>
  );
};

export default TimersList;
