import { orderByDate, getCategories, generateTaskItemId } from "./viewHelpers.js";
import { createTaskGroup, createTaskItem, addNewFormBtns } from "./subcomponents.js";
import { projectFormComponent, taskFormComponent } from "./forms.js";


export function projectComponent(todos, projectId, parent) {
  parent.textContent = "";

  const component = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = todos.getProjectById(projectId).getTitle();
  component.appendChild(title);

  const newFormDiv = document.createElement('div'); //where new form will go on page if button is pressed
  newFormDiv.id = "form";
  component.appendChild(newFormDiv); 

  addNewFormBtns(parent);

  const projectDiv = document.createElement('div');

  const tasks = todos.getTasksByProjectId(projectId); //this is both completed and not

  for (const cat of getCategories(tasks)) { 
    //create task group 
    const group = createTaskGroup(cat);
    //now list the tasks for each category
    const sortedTasks = orderByDate(tasks.filter(elem => elem.getCategory() === cat));

    for (const t of sortedTasks) {
      const item = createTaskItem(todos, t, true);
      group.appendChild(item);
    }
    projectDiv.appendChild(group);
  }
  component.appendChild(projectDiv);
  parent.appendChild(component);

  addButtonListeners(parent, todos, projectId);
}

function addButtonListeners(parent, todos, projectId) {
  const newProject = document.getElementById('new-project');
  const newTask = document.getElementById('new-task');

  newProject.addEventListener("click", () => {
    const nodeToReplace = document.getElementById('form');
    projectFormComponent(parent, nodeToReplace, todos);
  });

  newTask.addEventListener("click", () => {
    const nodeToReplace = document.getElementById('form');
    taskFormComponent(parent, nodeToReplace, todos, null, projectId);
  });

  const editBtns = document.querySelectorAll('.edit-button');
  for (let i = 0; i < editBtns.length; i ++){
    editBtns[i].addEventListener("click", (e) => {
      const nodeToReplace = document.getElementById(generateTaskItemId(e.target.dataset.taskId));
      const task = todos.getTaskById(parseInt(e.target.dataset.taskId));
      taskFormComponent(parent, nodeToReplace, todos, null, projectId, task);
    });
  }
}

