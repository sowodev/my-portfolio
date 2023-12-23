import { v4 as uuidv4 } from 'uuid';
import { Timer } from '../../types/timers';

export const TimersMockedData: Timer[] = [
  {
    uuid: uuidv4(),
    title: 'Timer 1',
    description: 'Description 1',
    type: 'end_by_date',
    end_date: '2023-12-25',
    end_date_time: '00:00',
    time_to_end_in_ms: 0,
    is_selected: true,
    is_completed: false,
    is_paused: false,
    is_stopped: false,
    is_favorite: false,
    created_at: '2021-01-01T00:00',
    updated_at: '2021-01-01T00:00',
  },
  {
    uuid: uuidv4(),
    title: 'Timer 2',
    description: 'Description 2',
    type: 'end_by_date',
    end_date: '2023-12-31',
    end_date_time: '00:00',
    time_to_end_in_ms: 0,
    is_selected: false,
    is_completed: false,
    is_paused: false,
    is_stopped: false,
    is_favorite: false,
    created_at: '2021-01-01T00:00',
    updated_at: '2021-01-01T00:00',
  },
  {
    uuid: uuidv4(),
    title: 'Timer 3',
    description: 'Description 3',
    type: 'end_by_time',
    end_date: '2021-01-01',
    time_to_end_in_ms: 150 * 60000,
    initial_time_to_end_in_ms: 150 * 60000,
    time_type: 'minutes',
    is_selected: false,
    is_completed: false,
    is_paused: false,
    is_stopped: false,
    is_favorite: false,
    created_at: '2021-01-01T00:00',
    updated_at: '2021-01-01T00:00',
  },
  {
    uuid: uuidv4(),
    title: 'Timer 4',
    description: 'Description 4',
    type: 'end_by_time',
    end_date: '2021-01-01',
    time_to_end_in_ms: 17 * 3600000,
    initial_time_to_end_in_ms: 17 * 3600000,
    time_type: 'hours',
    is_selected: false,
    is_completed: false,
    is_paused: false,
    is_stopped: false,
    is_favorite: false,
    created_at: '2021-01-01T00:00',
    updated_at: '2021-01-01T00:00',
  },
  {
    uuid: uuidv4(),
    title: 'Timer 5',
    description: 'Description 5',
    type: 'end_by_time',
    end_date: '2021-01-01',
    time_to_end_in_ms: 31 * 3600000,
    initial_time_to_end_in_ms: 31 * 3600000,
    time_type: 'hours',
    is_selected: false,
    is_completed: false,
    is_paused: false,
    is_stopped: false,
    is_favorite: false,
    created_at: '2021-01-01T00:00',
    updated_at: '2021-01-01T00:00',
  },
];
