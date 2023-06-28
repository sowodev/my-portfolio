import CountdownTimer from './CountdownTimer';
import TimersList from './TimersList';
import TimerModal from './modal/TimerModal';
import useTimersListController from './hooks/useTimersList';
import { EmptyTimer, TimerController, TimersListController } from './hooks/types';
import DeleteConfirmationModal from './modal/DeleteConfirmationModal';
import useTimer from './hooks/useTimer';

const Timers = function timers() {
  const timers_list_controller: TimersListController = useTimersListController();
  const timer_controller: TimerController = useTimer(
    timers_list_controller.getSelectedTimer() ?? EmptyTimer,
  );

  return (
    <div className="flex w-full h-full justify-center items-center">
      <TimersList
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
      />
      <CountdownTimer timer_controller={timer_controller} />
      <TimerModal
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
      />
      <DeleteConfirmationModal
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
      />
    </div>
  );
};

export default Timers;
