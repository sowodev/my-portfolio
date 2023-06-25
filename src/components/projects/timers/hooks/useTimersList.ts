import { useState } from 'react';
import { TimersMockedData } from '../TimersMockedData';
import { Timer, TimersListController } from './types';

function useTimersListController(): TimersListController {
  const [timers, setTimers] = useState<Timer[]>(TimersMockedData);
  const [to_edit, setToEdit] = useState<boolean>(false);
  const [show_modal, setShowModal] = useState<boolean>(false);
  const [show_delete_modal, setShowDeleteModal] = useState<boolean>(false);
  const [timer_to_delete, setTimerToDelete] = useState<string>('');
  const [timer_to_edit, setTimerToEdit] = useState<Timer | undefined>(undefined);

  function setTimer(timer: Timer): void {
    setTimers((t: Timer[]): Timer[] => [...t, timer]);
  }

  function deleteTimer(timer_uuid: string): void {
    let select: string = '';

    setTimers((t: Timer[]): Timer[] =>
      t.filter((timer: Timer): boolean => {
        if (timer.uuid === timer_uuid && timer.is_selected) {
          if (timers[0].uuid === timer_uuid) select = timers[1].uuid;
          else select = timers[0].uuid;
        }
        return timer.uuid !== timer_uuid;
      }),
    );

    if (select) setSelectedTimer(select);
  }

  function updateTimer(timer: Timer): void {
    console.log('timer', timer);

    setTimers((t: Timer[]): Timer[] =>
      t.map((t: Timer): Timer => {
        if (t.uuid === timer.uuid) {
          return timer;
        }
        return t;
      }),
    );
  }

  function getTimers(): Timer[] {
    return timers;
  }

  function getSingleTimer(timer_uuid: string): Timer | undefined {
    return timers.find((timer: Timer): boolean => timer.uuid === timer_uuid);
  }

  function setSelectedTimer(timer_uuid: string): void {
    setTimers((t: Timer[]): Timer[] =>
      t.map((t: Timer): Timer => {
        if (t.uuid === timer_uuid) {
          return { ...t, is_selected: true };
        }
        return { ...t, is_selected: false };
      }),
    );
  }

  return {
    // States
    to_edit,
    setToEdit,
    show_modal,
    setShowModal,
    show_delete_modal,
    setShowDeleteModal,
    timer_to_delete,
    setTimerToDelete,
    timer_to_edit,
    setTimerToEdit,
    // Timer functions
    setTimer,
    deleteTimer,
    updateTimer,
    getTimers,
    getSingleTimer,
    setSelectedTimer,
  };
}

export default useTimersListController;
