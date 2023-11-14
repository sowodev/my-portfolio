import AppContext from '@context/AppContext';
import { FC, ReactElement, useContext } from 'react';
import CountdownTimer from './CountdownTimer';
import TimersList from './TimersList';
import { EmptyTimer, TimerController, TimersListController } from './hooks/types';
import useTimer from './hooks/useTimer';
import useTimersListController from './hooks/useTimersList';
import DeleteConfirmationModal from './modal/DeleteConfirmationModal';
import ResetConfirmationModal from './modal/ResetConfirmationModal';
import TimerModal from './modal/TimerModal';

const Timers: FC = (): ReactElement => {
  const timers_list_controller: TimersListController = useTimersListController();
  const timer_controller: TimerController = useTimer(
    timers_list_controller.getSelectedTimer() ?? EmptyTimer,
  );
  const { theme } = useContext(AppContext);

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
        dark_mode={theme.mode === 'dark'}
      />
      <DeleteConfirmationModal
        timer_controller={timer_controller}
        timers_list_controller={timers_list_controller}
        dark_mode={theme.mode === 'dark'}
      />
      <ResetConfirmationModal
        timer_controller={timer_controller}
        dark_mode={theme.mode === 'dark'}
      />
    </div>
  );
};

export default Timers;
