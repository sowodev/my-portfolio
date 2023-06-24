export type Timer = {
  uuid: string;
  title: string;
  description: string;
  type: 'end_by_date' | 'end_by_time';
  end_date?: string;
  time_to_end?: number;
  time_type?: 'minutes' | 'hours';
  is_selected: boolean;
  is_completed: boolean;
  is_paused?: boolean;
  is_stopped?: boolean;
  is_favorite?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type TimersListController = {
  to_edit: boolean;
  setToEdit(edit: boolean): void;
  show_modal: boolean;
  setShowModal(show: boolean): void;
  show_delete_modal: boolean;
  setShowDeleteModal(show: boolean): void;
  timer_to_delete: string;
  setTimerToDelete(timer_uuid: string): void;
  timer_to_edit: Timer | undefined;
  setTimerToEdit(timer: Timer | undefined): void;
  setTimer(timer: Timer): void;
  deleteTimer(timer_uuid: string): void;
  updateTimer(timer: Timer): void;
  getTimers(): Timer[];
  getSingleTimer(timer_uuid: string): Timer | undefined;
  setSelectedTimer(timer_uuid: string): void;
};

export type FormValues = {
  title: string;
  description: string;
  end_date?: Date;
  end_time?: number;
  timer_type: 'end_by_date' | 'end_by_time';
  time?: 'minutes' | 'hours';
};
