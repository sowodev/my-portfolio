import { useState } from 'react';
import { TimersMockedData } from '../TimersMockedData';
import { Timer, TimersListController } from './types';

function useTimersListController(): TimersListController {
  const [timers, setTimers] = useState<Timer[]>(TimersMockedData);
  const [timerToDelete, setTimerToDelete] = useState<string>('');

  function setTimer(timer: Timer): void {
    setTimers((t: Timer[]): Timer[] => [...t, timer]);
  }

  function deleteTimer(timer_uuid: string): void {
    setTimers((t: Timer[]): Timer[] =>
      t.filter((timer: Timer): boolean => timer.uuid !== timer_uuid),
    );
  }

  function updateTimer(timer: Timer): void {
    setTimers((t: Timer[]): Timer[] =>
      t.map((t: Timer): Timer => (t.uuid === timer.uuid ? timer : t)),
    );
  }

  function getTimers(): Timer[] {
    return timers;
  }

  function getSingleTimer(timer_uuid: string): Timer | undefined {
    return timers.find((timer: Timer): boolean => timer.uuid === timer_uuid);
  }

  function setDeleteTimer(timer_uuid: string): void {
    setTimerToDelete(timer_uuid);
  }

  function getTimerToDelete(): string {
    return timerToDelete;
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
    setTimer,
    deleteTimer,
    updateTimer,
    getTimers,
    getSingleTimer,
    setDeleteTimer,
    getTimerToDelete,
    setSelectedTimer,
  };
}

export default useTimersListController;
