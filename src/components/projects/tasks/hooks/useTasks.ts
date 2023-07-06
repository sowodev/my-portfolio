import { useState } from 'react';
import { Task, TasksController, TasksColumn } from './types';
import { TasksMockedData } from '../MockedTasksData';

type ColumnName = 'To Do' | 'In Progress' | 'Done';

function tasksByPriority(tasks: Task[]) {
  const tasksByPriorityMap = new Map<string, TasksColumn>();
  tasksByPriorityMap.set('red', { 'To Do': [], 'In Progress': [], Done: [] });
  tasksByPriorityMap.set('orange', { 'To Do': [], 'In Progress': [], Done: [] });
  tasksByPriorityMap.set('yellow', { 'To Do': [], 'In Progress': [], Done: [] });
  tasksByPriorityMap.set('green', { 'To Do': [], 'In Progress': [], Done: [] });

  tasks.forEach((task) => {
    switch (task.priority) {
      case 'red':
        tasksByPriorityMap.get('red')?.[task.status].push(task);
        break;
      case 'orange':
        tasksByPriorityMap.get('orange')?.[task.status].push(task);
        break;
      case 'yellow':
        tasksByPriorityMap.get('yellow')?.[task.status].push(task);
        break;
      case 'green':
        tasksByPriorityMap.get('green')?.[task.status].push(task);
        break;
      default:
        break;
    }
  });

  return tasksByPriorityMap;
}

function useTasks(): TasksController {
  const [tasks, setTasks] = useState<Map<string, TasksColumn>>(tasksByPriority(TasksMockedData));
  const [show_tasks_modal, setShowTasksModal] = useState<boolean>(false);
  const [show_delete_task_modal, setShowDeleteTaskModal] = useState<boolean>(false);
  const [show_edit_task_modal, setShowEditTaskModal] = useState<boolean>(false);
  const [task_to_delete, setTaskToDelete] = useState<Task | null>(null);

  function createTask(task: Task) {}

  function updateTask(task: Task) {}

  function deleteTask(): void {
    if (task_to_delete === null) {
      return;
    }

    // Example: {"red" : {"To Do" : [task1, task2, task3], "In Progress" : [task4, task5], "Done" : [task6]}}
    setTasks((current_tasks: Map<string, TasksColumn>): Map<string, TasksColumn> => {
      if (current_tasks.get(task_to_delete.priority)?.[task_to_delete.status] !== undefined)
        current_tasks
          .get(task_to_delete.priority)
          ?.[task_to_delete.status].splice(
            current_tasks
              .get(task_to_delete.priority)
              ?.[task_to_delete.status]?.indexOf(task_to_delete)!,
            1,
          );

      return new Map<string, TasksColumn>(current_tasks);
    });
  }

  function reorderTasks(
    column_name: string,
    priority: string,
    index_from: number,
    index_to: number,
  ): void {
    // Example: {"red" : {"To Do" : [task1, task2, task3], "In Progress" : [task4, task5], "Done" : [task6]}}
    setTasks((current_tasks: Map<string, TasksColumn>): Map<string, TasksColumn> => {
      current_tasks
        .get(priority)
        ?.[column_name].splice(
          index_to,
          0,
          current_tasks.get(priority)?.[column_name].splice(index_from, 1)[0]!,
        );

      return new Map<string, TasksColumn>(current_tasks);
    });
  }

  function moveTask(
    column_name_from: string,
    column_name_to: string,
    priority_from: string,
    priority_to: string,
    index_from: number,
    index_to: number,
    task_id: string,
  ): void {}

  return {
    tasks,
    setTasks,
    show_tasks_modal,
    setShowTasksModal,
    show_delete_task_modal,
    setShowDeleteTaskModal,
    show_edit_task_modal,
    setShowEditTaskModal,
    task_to_delete,
    setTaskToDelete,
    createTask,
    updateTask,
    deleteTask,
    reorderTasks,
    moveTask,
  };
}

export default useTasks;
