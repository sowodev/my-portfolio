import { ArrowPathIcon, PauseIcon, PlayIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ReactElement } from 'react';
import { TimerController, TimersListController } from './hooks/types';

type Props = {
  timer_controller: TimerController;
  timers_list_controller: TimersListController;
};

const CountdownTimer: React.FC<Props> = function countdownTimer({
  timer_controller,
  timers_list_controller,
}: Props): ReactElement {
  return (
    <div className="flex h-full basis-[70%] justify-center items-center">
      <div className="flex flex-col w-[90%] h-4/5 font-[Lexend] bg-gray-700 rounded-xl justify-center items-center dark:bg-slate-700">
        <div className="flex w-full basis-[10%] text-4xl text-white justify-center items-center">
          Countdown Timer
        </div>
        <div className="flex flex-col w-full basis-[90%] justify-start items-center gap-12">
          <div className="flex flex-col justify-center items-center mt-12">
            <span className="text-white">
              Title:{' '}
              <span className="font-light text-slate-300">{timer_controller.timer.title}</span>
            </span>
            <span className="text-white">
              Description:{' '}
              <span className="font-light text-slate-300">
                {timer_controller.timer.description}
              </span>
            </span>
            <span className="text-white">
              Target:{' '}
              <span className="font-light text-slate-300">
                {timer_controller.timer.type === 'end_by_date'
                  ? new Date(timer_controller.timer.end_date!).toLocaleDateString()
                  : timer_controller.timer.time_type === 'hours'
                  ? timer_controller.timer.initial_time_to_end_in_ms! / 3600000 + ' hours'
                  : timer_controller.timer.initial_time_to_end_in_ms! / 60000 + ' minutes'}
              </span>
            </span>
          </div>
          <div className="flex w-3/5 h-1/4 px-4 rounded-lg font-[digital-bold] text-green-400 border border-[#f5f5f538] bg-[#ffffff3f] dark:bg-[#ffffff19] dark:text-green-600">
            <div className="flex flex-row w-full h-full justify-center items-center">
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">{timer_controller.remaining_time.days}</span>
                <span className="font-[Lexend] text-xs">Days</span>
              </div>
              <span className="text-7xl h-fit w-fit mb-4">:</span>
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">
                  {timer_controller.remaining_time.hours < 10
                    ? '0' + timer_controller.remaining_time.hours
                    : timer_controller.remaining_time.hours}
                </span>
                <span className="font-[Lexend] text-xs">Hours</span>
              </div>
              <span className="text-7xl h-fit w-fit mb-4">:</span>
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">
                  {timer_controller.remaining_time.minutes < 10
                    ? '0' + timer_controller.remaining_time.minutes
                    : timer_controller.remaining_time.minutes}
                </span>
                <span className="font-[Lexend] text-xs">Minutes</span>
              </div>
              <span className="text-7xl h-fit w-fit mb-4">:</span>
              <div className="flex flex-col basis-1/4 h-full justify-center items-center">
                <span className="text-8xl h-fit w-fit">
                  {timer_controller.remaining_time.seconds < 10
                    ? '0' + timer_controller.remaining_time.seconds
                    : timer_controller.remaining_time.seconds}
                </span>
                <span className="font-[Lexend] text-xs">Seconds</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-sans gap-8">
            <button
              className={
                timer_controller.timer.type === 'end_by_date'
                  ? `hidden`
                  : `px-4 h-12 bg-green-300 rounded-lg hover:bg-green-400 dark:bg-green-400 dark:hover:bg-green-500`
              }
              onClick={(): void => {
                timer_controller.togglePause();
              }}
            >
              {timer_controller.timer.is_paused ? (
                <PlayIcon className="w-5 h-5" />
              ) : (
                <PauseIcon className="w-5 h-5" />
              )}
            </button>
            <button
              className={
                timer_controller.timer.type === 'end_by_date'
                  ? `hidden`
                  : `px-4 h-12 bg-blue-300 rounded-lg hover:bg-blue-400 dark:bg-blue-400 dark:hover:bg-blue-500`
              }
              onClick={(): void => timer_controller.setShowResetModal(true)}
            >
              <ArrowPathIcon className="w-5 h-5" />
            </button>
            <button
              className={
                timer_controller.timer.uuid === 'empty_timer'
                  ? `hidden`
                  : `px-4 h-12 bg-red-300 rounded-lg hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-500`
              }
              onClick={() => {
                timers_list_controller.setShowDeleteModal(true);
                timers_list_controller.setTimerToDelete(timer_controller.timer.uuid);
              }}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
