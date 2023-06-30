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
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimated_time: number;
  due_date: string;
  due_time: string;
};

export type TasksController = {
  tasks: Map<string, Task[]>;
  setTasks: (tasks: Map<string, Task[]>) => void;
  show_tasks_modal: boolean;
  setShowTasksModal: (show_tasks_modal: boolean) => void;
  createTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
};
