import { orderByDate, getCategories, generateTaskItemId } from "./viewHelpers.js";
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
  addButtonListeners(component, parent, todos, projectId);

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

function addButtonListeners(component, parent, todos, projectId) {
  //for all buttons in the projectsComponent
  component.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      if (e.target.id === 'new-project') {
        const nodeToReplace = document.getElementById('form');
        projectFormComponent(parent, nodeToReplace, todos);
      }
      else if (e.target.id === 'new-task') {
        const nodeToReplace = document.getElementById('form');
        taskFormComponent(parent, nodeToReplace, todos, null, projectId);
      }
      else if (e.target.classList.contains('edit-button')) {
        const nodeToReplace = document.getElementById(generateTaskItemId(e.target.dataset.taskId));
        const task = todos.getTaskById(e.target.dataset.taskId);
        taskFormComponent(parent, nodeToReplace, todos, null, projectId, task);
      }
    }
  });
}