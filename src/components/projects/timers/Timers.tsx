import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import TimersList from './TimersList';
import AddTimerModal from './modal/AddTimerModal';
import useTimersListController from './hooks/useTimersList';
import { TimersListController } from './hooks/types';

const Timers = function timers() {
  const [show_modal, setShowModal] = useState(false);
  const timers_list_controller: TimersListController = useTimersListController();

  return (
    <div className="flex w-full h-full justify-center items-center">
      <TimersList timers_list_controller={timers_list_controller} setShowModal={setShowModal} />
      <CountdownTimer />
      <AddTimerModal
        timers_list_controller={timers_list_controller}
        show_modal={show_modal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Timers;
