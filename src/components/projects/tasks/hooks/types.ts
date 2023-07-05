export type FormValues = {
  title: string;
  description: string;
  difficulty: number;
  estimated_time: number;
  time_type: 'minutes' | 'hours';
  due_date: string;
  due_date_time: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
  priority: 'red' | 'orange' | 'yellow' | 'green';
  difficulty: 'very_low' | 'low' | 'medium' | 'high' | 'very_high';
  estimated_time: number;
  due_date: string;
  due_time: string;
};

export type TasksColumn = {
  [key: string]: Task[];
};

export type TasksController = {
  tasks: Map<string, TasksColumn>;
  setTasks: (tasks: Map<string, TasksColumn>) => void;
  show_tasks_modal: boolean;
  setShowTasksModal: (show_tasks_modal: boolean) => void;
  show_delete_task_modal: boolean;
  setShowDeleteTaskModal: (show_delete_task_modal: boolean) => void;
  show_edit_task_modal: boolean;
  setShowEditTaskModal: (show_edit_task_modal: boolean) => void;
  createTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  reorderTasks: (
    column_name: string,
    priority: string,
    index_from: number,
    index_to: number,
  ) => void;
  moveTask: (
    column_name_from: string,
    column_name_to: string,
    priority_from: string,
    priority_to: string,
    index_from: number,
    index_to: number,
    task_id: string,
  ) => void;
};

export const ConvertDifficultiesFromNumsToSvgs = {
  very_low: 'green-dif.svg',
  low: 'yellow-dif.svg',
  medium: 'orange-dif.svg',
  high: 'red-dif.svg',
  very_high: 'purple-dif.svg',
};
