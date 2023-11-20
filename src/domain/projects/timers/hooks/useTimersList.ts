import { useEffect, useState } from 'react';
import { TimersMockedData } from '../TimersMockedData';
import { Timer, TimersListController } from './types';

function useTimersListController(): TimersListController {
  const [timers, setTimers] = useState<Timer[]>(TimersMockedData);
  const [to_edit, setToEdit] = useState<boolean>(false);
  const [show_modal, setShowModal] = useState<boolean>(false);
  const [show_delete_modal, setShowDeleteModal] = useState<boolean>(false);
  const [timer_to_delete, setTimerToDelete] = useState<string>('');
  const [timer_to_edit, setTimerToEdit] = useState<Timer | undefined>(undefined);
  const [change_selected, setChangeSelected] = useState<boolean>(false);

  useEffect(() => {
    if (change_selected) {
      setSelectedTimer(timers[0].uuid);
      setChangeSelected(false);
    }
  }, [timers]);

  function setTimer(timer: Timer): void {
    setTimers((t: Timer[]): Timer[] => [...t, timer]);
  }

  function getTimers(): Timer[] {
    return timers;
  }

  function deleteTimer(timer_uuid: string): void {
    setTimers((t: Timer[]): Timer[] =>
      t.filter((timer: Timer): boolean => {
        if (t.length > 1) {
          if (timer.uuid === timer_uuid && timer.is_selected) {
            setChangeSelected(true);
          }
        }

        return timer.uuid !== timer_uuid;
      }),
    );
  }

  function updateTimer(timer: Timer): void {
    setTimers((t: Timer[]): Timer[] =>
      t.map((t: Timer): Timer => {
        if (t.uuid === timer.uuid) {
          return timer;
        }
        return t;
      }),
    );
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

  function getSelectedTimer(): Timer | undefined {
    return timers.find((timer: Timer): boolean => timer.is_selected);
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
    getSelectedTimer,
  };
}

export default useTimersListController;
