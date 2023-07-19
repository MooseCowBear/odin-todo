import { orderByDate, sameDay, getDivTitle, generateTaskItemId } from "./viewHelpers.js";
import { createTaskGroup, createTaskItem, addNewFormBtns } from "./subcomponents.js";
import { projectFormComponent, taskFormComponent } from "./forms.js";

export function tasksComponent(todos, taskSubset, parent) {
  parent.textContent = "";

  const tasks = todos[`get${taskSubset}Tasks`]();

  const component = document.createElement('div');
  component.classList.add('component');

  const title = document.createElement('h1');
  title.textContent = taskSubset === "Today" ? "Tasks" : taskSubset;

  component.appendChild(title);

  const newFormDiv = document.createElement('div'); //where new form will go on page if button is pressed
  newFormDiv.id = "form";
  component.appendChild(newFormDiv); 

  addNewFormBtns(parent);

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
  tasksDiv.classList.add('main-content');

  let currDate = sortedTasks[0].getDateAsDate();
  let currDiv = createTaskGroup(tasksDiv, getDivTitle(currDate)); //FOR UPDATE

  for (const t of sortedTasks) {

    if (sameDay(t.getDateAsDate(), currDate)) {
      createTaskItem(currDiv, todos, t); //NEEDS PARENT
    }
    else {
      //create a new group, then create task item to attach to it. 
      currDate = t.getDateAsDate();
      currDiv = createTaskGroup(tasksDiv, getDivTitle(currDate));
      //and then append, taskItem to the new group
      createTaskItem(currDiv, todos, t);
    }
  }
  //tasksDiv.appendChild(currDiv); //append whatever the last one was FOR UPDATE REMOVE
  component.appendChild(tasksDiv);
  parent.appendChild(component);

  addButtonListeners(parent, todos, taskSubset);
}

function addButtonListeners(parent, todos, taskSubset) {
  const newProject = document.getElementById('new-project');
  const newTask = document.getElementById('new-task');

  newProject.addEventListener("click", () => {
    const nodeToReplace = document.getElementById('form');
    projectFormComponent(parent, nodeToReplace, todos);
  });

  newTask.addEventListener("click", () => {
    const nodeToReplace = document.getElementById('form');
    taskFormComponent(parent, nodeToReplace, todos, taskSubset, null);
  });

  const editBtns = document.querySelectorAll('.edit-button');
  for (let i = 0; i < editBtns.length; i ++){
    editBtns[i].addEventListener("click", (e) => {
      const nodeToReplace = document.getElementById(generateTaskItemId(e.target.dataset.taskid));
      const task = todos.getTaskById(parseInt(e.target.dataset.taskid));
      taskFormComponent(parent, nodeToReplace, todos, taskSubset, null, task);
    });
  }
}