import { useEffect, useState } from 'react';
import { TimerController, RemainingTime, Timer } from './types';

function useTimer(default_timer: Timer): TimerController {
  const [remaining_time, setRemainingTime] = useState<RemainingTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timer, setTimer] = useState<Timer>(default_timer);

  useEffect(() => {
    let time_to_end: number = 0;

    if (timer.is_completed) return;
    if (timer.is_stopped) return;
    if (timer.is_paused) return;

    if (timer.type === 'end_by_date') {
      time_to_end = convertFromDateToMiliSeconds(timer.end_date ?? '', '00:00');
    } else if (timer.type === 'end_by_time') {
      if (timer.time_type === 'hours') {
        time_to_end = convertFromHoursToMiliSeconds(timer.time_to_end ?? 0);
      } else if (timer.time_type === 'minutes') {
        time_to_end = convertFromMinutesToMiliSeconds(timer.time_to_end ?? 0);
      }
    }

    setRemainingTime(convertFromMiliSecondsToRemainingTimer(time_to_end));

    const interval = setInterval(() => {
      if (time_to_end <= 0) {
        clearInterval(interval);
        setTimer((t: Timer): Timer => ({ ...t, is_completed: true }));
        return;
      }

      time_to_end -= 1000;

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

  function convertFromHoursToMiliSeconds(hours: number): number {
    const hours_ms = hours * 60 * 60 * 1000;
    return hours_ms;
  }

  function convertFromMinutesToMiliSeconds(minutes: number): number {
    const minutes_ms = minutes * 60 * 1000;
    return minutes_ms;
  }

  function convertFromMiliSecondsToRemainingTimer(miliseconds: number): RemainingTime {
    const days = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function pauseTimer(): void {
    setTimer((t: Timer): Timer => ({ ...t, is_paused: true }));
  }

  function resumeTimer(): void {
    setTimer((t: Timer): Timer => ({ ...t, is_paused: false }));
  }

  function resetTimer(): void {
    setTimer((t: Timer): Timer => ({ ...t, is_stopped: true }));
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
    pauseTimer,
    resumeTimer,
    resetTimer,
    deleteTimer,
    completeTimer,
  };
}

export default useTimer;
