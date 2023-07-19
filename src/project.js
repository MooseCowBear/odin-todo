import { Schedulable } from "./schedulable.js";

export const Project = (id, title, description, date, time, category) => {
  console.log("in project", title, description, date, time, category, id);

  const schedulable = Schedulable(date, time);
  title = title.trim().toLowerCase();
  category = category.trim().toLowerCase();

  const getId = () => {
    return id;
  };

  const getTitle = () => {
    return title;
  };

  const setTitle = (newTitle) => {
    title = newTitle.trim().toLowerCase();
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

  const setCategory = (newCategory) => {
    category = newCategory.trim().toLowerCase();
  };

  const toJSON = () => {
    return {
      id: id,
      title: title,
      description: description,
      date: date,
      time: time,
      category: category,
    };
  };

  return {
    ...schedulable,
    getId,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getCategory,
    setCategory,
    toJSON
  };
};