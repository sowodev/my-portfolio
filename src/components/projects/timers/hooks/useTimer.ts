import { useEffect, useState } from 'react';
import { TimerController, RemainingTime, Timer, EmptyTimer } from './types';

function useTimer(default_timer: Timer): TimerController {
  const [remaining_time, setRemainingTime] = useState<RemainingTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timer, setTimer] = useState<Timer>(default_timer);
  const [show_reset_modal, setShowResetModal] = useState<boolean>(false);

  useEffect(() => {
    let time_to_end: number = 0;

    if (timer.is_completed) return;
    if (timer.is_stopped) return;
    if (timer.is_paused) return;

    if (timer.type === 'end_by_date') {
      if (timer.uuid === 'empty_timer') {
        time_to_end = 0;
        setRemainingTime(convertFromMiliSecondsToRemainingTimer(time_to_end));
        return;
      }
      time_to_end = convertFromDateToMiliSeconds(timer.end_date ?? '', '00:00');
    } else if (timer.type === 'end_by_time') {
      time_to_end = timer.time_to_end_in_ms ?? 0;
    }

    setRemainingTime(convertFromMiliSecondsToRemainingTimer(time_to_end));

    const interval = setInterval(() => {
      if (time_to_end <= 0) {
        clearInterval(interval);
        setTimer((t: Timer): Timer => ({ ...t, is_completed: true }));
        return;
      }

      time_to_end -= 1000;
      timer.time_to_end_in_ms = time_to_end;

      setRemainingTime(convertFromMiliSecondsToRemainingTimer(time_to_end));
    }, 1000);

    return (): void => clearInterval(interval);
  }, [timer]);

  function convertFromDateToMiliSeconds(date: string, time: string): number {
    const date_to_convert: string = `${date} ${time}`;
    const date_ms = new Date(date_to_convert).getTime();
    const now_ms = new Date().getTime();
    return date_ms - now_ms;
  }

  function convertFromMiliSecondsToRemainingTimer(miliseconds: number): RemainingTime {
    const days: number = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds: number = Math.floor((miliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function togglePause(): void {
    setTimer((t: Timer): Timer => ({ ...t, is_paused: !t.is_paused }));
  }

  function resetTimer(): void {
    setTimer((t: Timer): Timer => ({ ...t, time_to_end_in_ms: t.initial_time_to_end_in_ms }));

    timer.is_paused &&
      setRemainingTime(
        convertFromMiliSecondsToRemainingTimer(timer.initial_time_to_end_in_ms ?? 0),
      );
  }

  function deleteTimer(): void {
    setTimer((t: Timer): Timer => ({ ...t, is_completed: true }));
  }

  function completeTimer(): void {
    setTimer((t: Timer): Timer => ({ ...t, is_completed: true }));
  }

  return {
    timer,
    setTimer,
    remaining_time,
    show_reset_modal,
    setShowResetModal,
    togglePause,
    resetTimer,
    deleteTimer,
    completeTimer,
  };
}

export default useTimer;
