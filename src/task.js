import { Schedulable } from "./schedulable.js";

export const Task = (description, projectTitle, priority, date, time, category = "misc") => {
  //need to inherit from schedulable
  const schedulable = Schedulable(date, time);

  let completed = false;

  const getDescription = () => {
    return description;
  };
  
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getProject = () => {
    return projectTitle;
  };

  const getCategory = () => {
    return category;
  };

  const setCategory = (newCategory) => {
    category = newCategory;
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

  return {
    ...schedulable,
    getDescription,
    setDescription,
    getProject,
    getCategory,
    setCategory,
    getPriority,
    setPriority,
    complete,
    updateStatus
  };
};