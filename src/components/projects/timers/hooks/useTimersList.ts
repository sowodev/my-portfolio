import { useState } from "react";
import { TimersMockedData } from "../TimersMockedData";
import { Timer, TimersListController } from "./types";

function useTimersListController(): TimersListController {
  const [timers, setTimers] = useState<Timer[]>(TimersMockedData);

  function setTimer(timer: Timer): void {
    setTimers((t: Timer[]): Timer[] => [...t, timer]);
  }

  function deleteTimer(timer_id: number): void {
    setTimers((t: Timer[]): Timer[] =>
      t.filter((timer: Timer): boolean => timer.id !== timer_id)
    );
  }

  function updateTimer(timer: Timer): void {
    setTimers((t: Timer[]): Timer[] =>
      t.map((t: Timer): Timer => (t.id === timer.id ? timer : t))
    );
  }

  function getTimers(): Timer[] {
    return timers;
  }

  return {
    setTimer,
    deleteTimer,
    updateTimer,
    getTimers,
  };
}

export default useTimersListController;
