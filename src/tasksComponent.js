import { orderByDate } from "./viewHelpers.js";
import { createTaskGroup, createTaskItem } from "./subcomponents.js";

export function tasksComponent(tasks, parent) {
  //reset parent to be empty, then draw this component
  parent.textContent = "";

  const sortedTasks = orderByDate(tasks);

  const component = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = 'Tasks';

  component.appendChild(title);

  if (sortedTasks.length === 0) {
    const message = document.createElement('p');
    message.textContent = "No tasks";
    component.appendChild(message);
    parent.appendChild(component);
    return;
  }

  const tasksDiv = document.createElement('div');

  let currDate = sortedTasks[0].getDate();
  let currDiv = createTaskGroup(getDivTitle(currDate));

  for (const t of sortedTasks) {
    const taskItem = createTaskItem(t); //don't want the date, since grouped by date

    if (sameDay(t.getDate(), currDate)) {
      //append to the current div
      currDiv.appendChild(taskItem);
    }
    else {
      //done with that group
      tasksDiv.appendChild(currDiv);
      //create a new group
      currDate = t.getDate();
      currDiv = createTaskGroup(getDivTitle(currDate));
      //and then append, taskItem to the new group
      currDiv.appendChild(taskItem);
    }
  }
  tasksDiv.appendChild(currDiv); //append whatever the last one was

  component.appendChild(tasksDiv);

  parent.appendChild(component);
}

function sameDay(one, two) {
  return one.getDate() === two.getDate() && 
    one.getMonth() === two.getMonth() &&
    one.getFullYear() === two.getFullYear();
}

function getDivTitle(date) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (sameDay(date, today)) {
    return "Today";
  }
  else if (sameDay(date, tomorrow)) {
    return "Tomorrow";
  }
  else {
    return date.toDateString();
  }
}