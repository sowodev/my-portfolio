import CountdownTimer from './CountdownTimer';
import TimersList from './TimersList';
import TimerModal from './modal/TimerModal';
import useTimersListController from './hooks/useTimersList';
import { TimersListController } from './hooks/types';
import DeleteConfirmationModal from './modal/DeleteConfirmationModal';

const Timers = function timers() {
  const timers_list_controller: TimersListController = useTimersListController();

  return (
    <div className="flex w-full h-full justify-center items-center">
      <TimersList timers_list_controller={timers_list_controller} />
      <CountdownTimer />
      <TimerModal timers_list_controller={timers_list_controller} />
      <DeleteConfirmationModal timers_list_controller={timers_list_controller} />
    </div>
  );
};

export default Timers;
