import { Schedulable } from "./schedulable.js";

export const Task = (id, description, projectId, priority, date, time, category, completed = false) => {
  const schedulable = Schedulable(date, time);
  category = category.trim().toLowerCase();

  const getId = () => {
    return id;
  };

  const getDescription = () => {
    return description;
  };
  
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getProjectId = () => {
    return projectId;
  };

  const getCategory = () => {
    return category;
  };

  const setCategory = (newCategory) => {
    category = newCategory.trim().toLowerCase();
  };

  const getPriority = () => {
    return priority;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const complete = () => {
    return completed;
  };

  const updateStatus = () => {
    completed = !completed;
  };

  const toJSON = () => {
    return {
      completed: completed,
      id: id,
      description: description,
      projectId: projectId,
      priority: priority,
      date: schedulable.getDate(),
      time: schedulable.getTime(),
      category: category
    };
  };

  return {
    ...schedulable,
    getId,
    getDescription,
    setDescription,
    getProjectId,
    getCategory,
    setCategory,
    getPriority,
    setPriority,
    complete,
    updateStatus,
    toJSON,
  };
};