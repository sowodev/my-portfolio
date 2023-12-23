import { useState } from 'react';
import { ColumnType, PriorityType, Task, TasksColumn, TasksController } from '../../../types/tasks';
import { TasksMockedData } from '../MockedTasksData';

function tasksByPriority(tasks: Task[]): Map<string, TasksColumn> {
  const tasksByPriorityMap = new Map<string, TasksColumn>();
  tasksByPriorityMap.set('red', { 'To Do': [], 'In Progress': [], Done: [] });
  tasksByPriorityMap.set('orange', { 'To Do': [], 'In Progress': [], Done: [] });
  tasksByPriorityMap.set('yellow', { 'To Do': [], 'In Progress': [], Done: [] });
  tasksByPriorityMap.set('green', { 'To Do': [], 'In Progress': [], Done: [] });

  tasks.forEach((task): void => {
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
  // TODO: [Optimization] Use useMemo() to avoid re-rendering when tasks are updated
  // TODO: [Optimization] Use useCallback() to avoid re-rendering when functions are updated
  // TODO: [Optimization] Break down tasks by quadrant
  const [tasks, setTasks] = useState<Map<string, TasksColumn>>(tasksByPriority(TasksMockedData));
  const [show_tasks_modal, setShowTasksModal] = useState<boolean>(false);
  const [show_delete_task_modal, setShowDeleteTaskModal] = useState<boolean>(false);
  const [show_edit_task_modal, setShowEditTaskModal] = useState<boolean>(false);
  const [task_to_delete, setTaskToDelete] = useState<Task | null>(null);
  const [new_task_priority, setNewTaskPriority] = useState<PriorityType>('red');

  function createTask(task: Task): void {
    // Example: {"red" : {"To Do" : [task1, task2, task3], "In Progress" : [task4, task5], "Done" : [task6]}}
    setTasks((current_tasks: Map<string, TasksColumn>): Map<string, TasksColumn> => {
      current_tasks.get(task.priority)?.[task.status].push(task);
      return new Map<string, TasksColumn>(current_tasks);
    });
  }

  // TODO: to be implemented
  function updateTask(task: Task): void {}

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
  ): void {
    setTasks((current_tasks: Map<string, TasksColumn>): Map<string, TasksColumn> => {
      let task: Task = current_tasks
        .get(priority_from)
        ?.[column_name_from].splice(index_from, 1)[0]!;

      task = {
        ...task,
        status: column_name_to as ColumnType,
        priority: priority_to as PriorityType,
      };

      current_tasks.get(priority_to)?.[column_name_to].splice(index_to, 0, task);

      return new Map<string, TasksColumn>(current_tasks);
    });
  }

  function moveTaskToDone(task: Task): void {
    setTasks((current_tasks: Map<string, TasksColumn>): Map<string, TasksColumn> => {
      const task_to_move: Task = current_tasks
        .get(task.priority)
        ?.[task.status].splice(
          current_tasks.get(task.priority)?.[task.status].indexOf(task)!,
          1,
        )[0]!;

      task_to_move.status = 'Done';

      current_tasks.get(task.priority)?.['Done'].push(task_to_move);

      return new Map<string, TasksColumn>(current_tasks);
    });
  }

  function moveTaskFromDone(task: Task): void {
    setTasks((current_tasks: Map<string, TasksColumn>): Map<string, TasksColumn> => {
      const task_to_move: Task = current_tasks
        .get(task.priority)
        ?.[task.status].splice(
          current_tasks.get(task.priority)?.[task.status].indexOf(task)!,
          1,
        )[0]!;

      task_to_move.status = 'To Do';

      current_tasks.get(task.priority)?.['To Do'].push(task_to_move);

      return new Map<string, TasksColumn>(current_tasks);
    });
  }

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
    new_task_priority,
    setNewTaskPriority,
    createTask,
    updateTask,
    deleteTask,
    reorderTasks,
    moveTask,
    moveTaskToDone,
    moveTaskFromDone,
  };
}

export default useTasks;
