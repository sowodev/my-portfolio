export type Timer = {
  uuid: string;
  title: string;
  description: string;
  type: string;
  end_date?: Date;
  time_to_end?: number;
  is_selected: boolean;
  is_completed: boolean;
  is_paused?: boolean;
  is_stopped?: boolean;
  is_favorite?: boolean;
  // created_at: Date;
  // updated_at: Date;
};

export type TimersListController = {
  setTimer(timer: Timer): void;
  deleteTimer(timer_uuid: string): void;
  updateTimer(timer: Timer): void;
  getTimers(): Timer[];
  getSingleTimer(timer_uuid: string): Timer | undefined;
  setDeleteTimer(timer_uuid: string): void;
  getTimerToDelete(): string;
  setSelectedTimer(timer_uuid: string): void;
};

export type FormValues = {
  title: string;
  description: string;
  end_date?: Date;
  end_time?: number;
  timer_type: 'end_by_date' | 'end_by_time';
  time?: string;
};
