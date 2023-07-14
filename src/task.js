export const Task = (description, category = "misc", priority = 0, date = null, time = null) => {
  let completed = false;

  const getDescription = () => {
    return description;
  };
  
  const setDescription = (newDescription) => {
    description = newDescription;
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

  const getDate = () => {
    return date;
  };

  const setDate = (newDate) => {
    date = newDate;
  };

  const getTime = () => {
    return time;
  };

  const setTime = (newTime) => {
    time = newTime;
  };

  const getStatus = () => {
    return completed;
  };

  const updateStatus = () => {
    completed = !completed;
  };

  return {
    getDescription,
    setDescription,
    getCategory,
    setCategory,
    getPriority,
    setPriority,
    getDate,
    setDate,
    getTime,
    setTime,
    getStatus,
    updateStatus
  };
};