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
  addButtonListeners(component, parent, todos, taskSubset);

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

function addButtonListeners(component, parent, todos, taskSubset) {
  //for all buttons in the tasksComponent
  component.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      if (e.target.id === 'new-project') {
        const nodeToReplace = document.getElementById('form');
        projectFormComponent(parent, nodeToReplace, todos);
      }
      else if (e.target.id === 'new-task') {
        const nodeToReplace = document.getElementById('form');
        taskFormComponent(parent, nodeToReplace, todos, taskSubset, null);
      }
      else if (e.target.classList.contains('edit-button')) {
        const nodeToReplace = document.getElementById(generateTaskItemId(e.target.dataset.taskId));
        const task = todos.getTaskById(e.target.dataset.taskId);
        taskFormComponent(parent, nodeToReplace, todos, taskSubset, null, task);
      }
    }
  });
}