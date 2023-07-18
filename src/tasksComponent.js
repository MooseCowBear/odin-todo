import { orderByDate, sameDay, getDivTitle } from "./viewHelpers.js";
import { createTaskGroup, createTaskItem, addNewFormBtns } from "./subcomponents.js";
import { projectFormComponent, taskFormComponent } from "./forms.js";

export function tasksComponent(todos, taskSubset, parent) {
  parent.textContent = "";

  const tasks = todos[`get${taskSubset}Tasks`]();

  const component = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = taskSubset === "Today" ? "Tasks" : taskSubset;

  component.appendChild(title);

  const newFormDiv = document.createElement('div'); //where new form will go on page if button is pressed
  newFormDiv.id = "form";
  component.appendChild(newFormDiv); 

  addNewFormBtns(parent);
  addNewButtonListeners(parent, taskSubset, todos, newFormDiv);

  if (tasks.length === 0) {
    const message = document.createElement('p');
    message.id ="no-tasks-message";
    message.textContent = "No tasks";
    component.appendChild(message);
    parent.appendChild(component);
    return;
  }

  const sortedTasks = orderByDate(tasks);

  const tasksDiv = document.createElement('div');

  let currDate = sortedTasks[0].getDate();
  let currDiv = createTaskGroup(getDivTitle(currDate));

  for (const t of sortedTasks) {
    const taskItem = createTaskItem(t); 

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

function addNewButtonListeners(parent, taskSubset, todos, nodeToReplace) {
  const newProject = document.getElementById('new-project');

  const newTask = document.getElementById('new-task');

  newProject.addEventListener("click", () => {
    projectFormComponent(parent, nodeToReplace, todos);
  });

  newTask.addEventListener("click", () => {
    taskFormComponent(parent, nodeToReplace, todos, taskSubset, null);
  });
}