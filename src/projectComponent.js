import { orderByDate, getCategories, generateTaskItemId } from "./viewHelpers.js";
import { createTaskGroup, createTaskItem, addNewFormBtns, addElement} from "./subcomponents.js";
import { projectFormComponent, taskFormComponent } from "./forms.js";


export function projectComponent(todos, projectId, parent) {
  parent.textContent = "";

  addNewFormBtns(parent);

  const component = addElement('div', parent, ['component']);
  const header = addElement('div', component, ['project-header']);
  addElement('h1', header, [], todos.getProjectById(projectId).getTitle());
  addElement('p', header, [], todos.getProjectById(projectId).dateFormatted());
  addElement('button', header, ['edit-project'], 'Edit', {id: 'edit-project'});

  const description = todos.getProjectById(projectId).getDescription();
  if (description !== "") {
    addElement('p', component, [], description);
  }

  addElement('div', component, [], null, {id: 'form'}); 

  const projectDiv = addElement('div', component, ['main-content']);

  const tasks = todos.getTasksByProjectId(projectId); 

  for (const cat of getCategories(tasks)) { 
    const group = createTaskGroup(projectDiv, cat); 
    const sortedTasks = orderByDate(tasks.filter(elem => elem.getCategory() === cat));

    for (const t of sortedTasks) {
      createTaskItem(group, todos, t, true); 
    }
  }
  addButtonListeners(parent, todos, projectId);
}

function addButtonListeners(parent, todos, projectId) {
  const newProject = document.getElementById('new-project');
  const newTask = document.getElementById('new-task');
  const formDiv = document.getElementById('form');

  newProject.addEventListener("click", () => {
    projectFormComponent(parent, formDiv, todos);
  });

  newTask.addEventListener("click", () => {
    taskFormComponent(parent, formDiv, todos, null, projectId);
  });

  const projectEditBtn = document.getElementById('edit-project');
  projectEditBtn.addEventListener("click", () => {
    projectFormComponent(parent, formDiv, todos, todos.getProjectById(projectId));
  });

  const editBtns = document.querySelectorAll('.edit-button');
  for (let i = 0; i < editBtns.length; i ++){
    editBtns[i].addEventListener("click", (e) => {
      const taskDiv = document.getElementById(generateTaskItemId(e.target.dataset.taskid));
      const task = todos.getTaskById(parseInt(e.target.dataset.taskid));
      taskFormComponent(parent, taskDiv, todos, null, projectId, task);
    });
  }
}