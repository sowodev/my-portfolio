import { useState } from 'react';
import { Task, TasksController } from './types';
import { TasksMockedData } from '../MockedTasksData';

function tasksByPriority(tasks: Task[]) {
  const tasksByPriorityMap = new Map<string, Task[]>();
  tasksByPriorityMap.set('red', []);
  tasksByPriorityMap.set('orange', []);
  tasksByPriorityMap.set('yellow', []);
  tasksByPriorityMap.set('green', []);

  tasks.forEach((task) => {
    switch (task.priority) {
      case 'red':
        tasksByPriorityMap.get('red')?.push(task);
        break;
      case 'orange':
        tasksByPriorityMap.get('orange')?.push(task);
        break;
      case 'yellow':
        tasksByPriorityMap.get('yellow')?.push(task);
        break;
      case 'green':
        tasksByPriorityMap.get('green')?.push(task);
        break;
      default:
        break;
    }
  });

  return tasksByPriorityMap;
}

function useTasks(): TasksController {
  const [tasks, setTasks] = useState<Map<string, Task[]>>(tasksByPriority(TasksMockedData));
  const [show_tasks_modal, setShowTasksModal] = useState<boolean>(false);

  function createTask(task: Task) {
    const tasksByPriorityMap = tasksByPriority(tasks.get(task.status) || []);
    tasksByPriorityMap.get(task.priority)?.push(task);
    setTasks(new Map(tasksByPriorityMap));
  }

  function updateTask(task: Task) {
    const tasksByPriorityMap = tasksByPriority(tasks.get(task.status) || []);
    const taskIndex = tasksByPriorityMap.get(task.priority)?.findIndex((t) => t.id === task.id);
    if (taskIndex !== undefined && taskIndex !== -1) {
      tasksByPriorityMap.get(task.priority)?.splice(taskIndex, 1, task);
      setTasks(new Map(tasksByPriorityMap));
    }
  }

  function deleteTask(task: Task) {
    const tasksByPriorityMap = tasksByPriority(tasks.get(task.status) || []);
    const taskIndex = tasksByPriorityMap.get(task.priority)?.findIndex((t) => t.id === task.id);
    if (taskIndex !== undefined && taskIndex !== -1) {
      tasksByPriorityMap.get(task.priority)?.splice(taskIndex, 1);
      setTasks(new Map(tasksByPriorityMap));
    }
  }

  return {
    tasks,
    setTasks,
    show_tasks_modal,
    setShowTasksModal,
    createTask,
    updateTask,
    deleteTask,
  };
}

export default useTasks;
