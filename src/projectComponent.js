import { orderByDate, getCategories } from "./viewHelpers.js";
import { createTaskGroup, createTaskItem, addNewFormBtns } from "./subcomponents.js";
import { projectFormComponent, taskFormComponent } from "./forms.js";

//needs edit option!!

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
  addNewButtonListeners(parent, projectId, todos, newFormDiv);

  const projectDiv = document.createElement('div');

  const tasks = todos.getTasksByProjectId(projectId); //this is both completed and not

  for (const cat of getCategories(tasks)) { 
    //create task group 
    const group = createTaskGroup(cat);
    //now list the tasks for each category
    const sortedTasks = orderByDate(tasks.filter(elem => elem.getCategory() === cat));

    for (const t of sortedTasks) {
      const item = createTaskItem(t, true);
      group.appendChild(item);
    }
    projectDiv.appendChild(group);
  }
  component.appendChild(projectDiv);
  parent.appendChild(component);
}

function addNewButtonListeners(parent, projectId, todos, nodeToReplace) {
  const newProject = document.getElementById('new-project');

  const newTask = document.getElementById('new-task');

  newProject.addEventListener("click", () => {
    projectFormComponent(parent, nodeToReplace, todos);
  });

  newTask.addEventListener("click", () => {
    taskFormComponent(parent, nodeToReplace, todos, null, projectId);
  });
}