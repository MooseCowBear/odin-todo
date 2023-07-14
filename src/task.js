export const Task = (description, category = "misc", priority = 0, date = null, timeSpecified = false) => {
  let completed = false;

  //want if time specified to set the date to the end of the day, and same for project

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

  const complete = () => {
    return completed;
  };

  const updateStatus = () => {
    completed = !completed;
  };

  const hasTime = () => {
    return timeSpecified;
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
    complete,
    updateStatus,
    hasTime
  };
};