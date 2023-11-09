import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import CountdownTimer from './CountdownTimer';
import TimersList from './TimersList';
import { EmptyTimer, TimerController, TimersListController } from './hooks/types';
import useTimer from './hooks/useTimer';
import useTimersListController from './hooks/useTimersList';
import DeleteConfirmationModal from './modal/DeleteConfirmationModal';
import ResetConfirmationModal from './modal/ResetConfirmationModal';
import TimerModal from './modal/TimerModal';

const Timers = function timers() {
  const timers_list_controller: TimersListController = useTimersListController();
  const timer_controller: TimerController = useTimer(
    timers_list_controller.getSelectedTimer() ?? EmptyTimer,
  );
  const { set_dark } = useContext(GlobalContext);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <TimersList
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
      />
      <CountdownTimer
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
      />
      <TimerModal
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
        dark_mode={set_dark.is_dark === 'dark'}
      />
      <DeleteConfirmationModal
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
        dark_mode={set_dark.is_dark === 'dark'}
      />
      <ResetConfirmationModal
        timer_controller={timer_controller}
        dark_mode={set_dark.is_dark === 'dark'}
      />
    </div>
  );
};

export default Timers;
