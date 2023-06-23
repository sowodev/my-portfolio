import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import TimersList from './TimersList';
import TimerModal from './modal/TimerModal';
import useTimersListController from './hooks/useTimersList';
import { TimersListController } from './hooks/types';
import DeleteConfirmationModal from './modal/DeleteConfirmationModal';

const Timers = function timers() {
  const [show_modal, setShowModal] = useState(false);
  const [show_delete_modal, setShowDeleteModal] = useState(false);
  const timers_list_controller: TimersListController = useTimersListController();

  return (
    <div className="flex w-full h-full justify-center items-center">
      <TimersList
        timers_list_controller={timers_list_controller}
        setShowModal={setShowModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <CountdownTimer />
      <TimerModal
        timers_list_controller={timers_list_controller}
        show_modal={show_modal}
        setShowModal={setShowModal}
      />
      <DeleteConfirmationModal
        timers_list_controller={timers_list_controller}
        show_delete_modal={show_delete_modal}
        setShowDeleteModal={setShowDeleteModal}
      />
    </div>
  );
};

export default Timers;
