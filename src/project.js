export const Project = (title, description, category, deadlineDate = null, deadlineTime = null) => {
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
    addTask,
    getTasksByCategory,
    removeTask
  };
};