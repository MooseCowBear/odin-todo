export const Project = (title, description, category, deadlineDate = null, deadlineTime = null) => {
  let completed = false;
  const tasks = [];

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

  const getDeadlineDate = () => {
    return deadlineDate;
  };

  const setDeadlineDate = (newDate) => {
    deadlineDate = newDate;
  };

  const getDeadlineTime = () => {
    return deadlineTime;
  };

  const setDeadlineTime = (newTime) => {
    deadlineTime = newTime;
  };

  const getStatus = () => {
    return completed;
  };

  const updateStatus = () => {
    completed = !completed;
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  const getTasks = () => {
    return tasks;
  };

  const removeTask = (index) => {
    tasks.splice(index, 1);
  };

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getCategory,
    getDeadlineDate,
    setDeadlineDate,
    getDeadlineTime,
    setDeadlineTime, 
    getStatus,
    updateStatus,
    addTask,
    getTasks,
    removeTask
  };
};