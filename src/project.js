import { Schedulable } from "./schedulable.js";

export const Project = (title, description, date, time, category) => {
  const schedulable = Schedulable(date, time);

  const tasks = { misc: [] };

  const getTitle = () => {
    return title;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getDescription = () => {
    return description;
  };

  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getCategory = () => {
    return category;
  };

  const addTask = (task, taskCategory) => {
    if (taskCategory in tasks) {
      tasks[taskCategory].push(task);
    }
    else {
      tasks[taskCategory] = [];
      tasks[taskCategory].push(task);
    }
  };

  const getTasksByCategory = (cat) => {
    return tasks[cat];
  };

  const getTasks = () => {
    return tasks;
  };

  const removeTask = (index) => {
    tasks.splice(index, 1);
  };

  const complete = () => {
    for (const cat in tasks) {
      for (const task of tasks[cat]) {
        if (!task.complete()) {
          return false;
        }
      }
    }
    return true;
  };

  return {
    ...schedulable,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getCategory,
    addTask,
    getTasksByCategory,
    getTasks,
    removeTask, 
    complete
  };
};