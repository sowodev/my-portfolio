export type Timer = {
  id: number;
  title: string;
  description: string;
  type: string;
  end_date: Date;
  time_to_end: number;
  is_completed: boolean;
  is_paused: boolean;
  is_stopped: boolean;
  is_favorite: boolean;
  created_at: Date;
  updated_at: Date;
};

export type TimersListController = {
  setTimer(timer: Timer): void;
  deleteTimer(timer_id: number): void;
  updateTimer(timer: Timer): void;
  getTimers(): Timer[];
};
