import { orderByDate } from "./order.js";

//NEED EVENT LISTENERS! want any checkbox becomes checked, then 1. mark that task as completed.
//(which will require finding the right task...)
//And want to make that task to not be in view anymore...
//transition it out somehow, with both opacity and y scale change?
export function tasksComponent(tasks, parent) {
  const sortedTasks = orderByDate(tasks);

  const component = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = 'Tasks';

  component.appendChild(title);

  const tasksDiv = document.createElement('div');

  let currDate = sortedTasks[0].getDate();
  let currDiv = createTaskGroup(getDivTitle(currDate));

  for (const t of sortedTasks) {
    const taskItem = addTaskItem(t); //don't want the date, since grouped by date

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

//both of these will be reused by projects component... so will need separate file
//makes set div title unnec
function createTaskGroup(groupTitle) {
  const groupDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = groupTitle;
  groupDiv.appendChild(title);

  return groupDiv;
}

function addTaskItem(task, includeDate = false) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');
  const lbl = document.createElement('label');
  const check = document.createElement('input');
  check.type = 'checkbox'; 

  if (task.completed) {
    check.checked = true;
  }

  lbl.appendChild(check);

  const labelContent = document.createElement('span');
  const description = document.createElement('span');
  const projectTitle = document.createElement('span');

  description.textContent = task.getDescription();
  projectTitle.textContent = task.getProject();
  projectTitle.classList.add('project-title');

  labelContent.appendChild(description);
  labelContent.appendChild(projectTitle);

  lbl.appendChild(labelContent);

  itemDiv.appendChild(lbl);

  if (task.getPriority() === 'high') {
    const priorty = document.createElement('p'); //change to icon
    priorty.textContent = "!";
    itemDiv.appendChild(priorty);
  }

  const time = document.createElement('div');
  const timeContent = document.createElement('span');
  timeContent.textContent = timeDisplay(task); 
  time.appendChild(timeContent);

  if (includeDate) {
    const dateContent = document.createElement('span');
    dateContent = dateDisplay(task.getDate());
    time.appendChild(dateContent);
  }

  itemDiv.appendChild(time);
  return itemDiv;
}

//THESE WILL MOVE... at least some will be reused to projects component...
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

function timeDisplay(task) {
  if (task.hasTime()) {
    task.getDate().toLocaleTimeString(); //not quite how we want it...
  }
  else {
    "";
  }
}

function dateDisplay(date) {
  //not sure how i want this yet
  return date.toDateString();
}