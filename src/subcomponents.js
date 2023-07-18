import { generateTaskItemId } from "./viewHelpers.js";

export function createTaskGroup(groupTitle) {
  const groupDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = groupTitle;
  groupDiv.appendChild(title);
  groupDiv.classList.add('task-group');

  return groupDiv;
}

export function createTaskItem(todos, task, includeDate = false) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');
  itemDiv.id = generateTaskItemId(task.getId());

  const lbl = document.createElement('label');
  const check = document.createElement('input');
  check.type = 'checkbox'; 

  if (task.completed) {
    check.checked = true;
  }

  check.addEventListener('change', (e) => {
    task.updateStatus();

    if (e.target.checked) {
      console.log("a check box was checked");
      //want to fade out...? only if not showing completed tasks...which would require a bool...
    }
  });

  lbl.appendChild(check);

  const labelContent = document.createElement('span');
  labelContent.classList.add("label-content");
  const description = document.createElement('span');

  description.textContent = task.getDescription();
  labelContent.appendChild(description);

  if (task.getProjectId() > 0) {
    const projectTitle = document.createElement('span');
    projectTitle.textContent = todos.getProjectById(task.getProjectId()).getTitle();
    projectTitle.classList.add('project-title');
    labelContent.appendChild(projectTitle);
  }

  lbl.appendChild(labelContent);

  itemDiv.appendChild(lbl);

  const time = document.createElement('div');
  time.classList.add("datetime-display");

  if (includeDate) {
    const dateContent = document.createElement('span');
    dateContent.textContent = task.dateFormatted();
    time.appendChild(dateContent);
  }

  const timeContent = document.createElement('span');
  timeContent.textContent = task.timeFormatted(); 
  time.appendChild(timeContent);

  itemDiv.appendChild(time);

  //here want to add the info icon in a button to edit
  const edit = document.createElement('button');
  edit.classList.add("edit-button");
  edit.dataset.taskId = `${task.getId()}`; //to be used in event listener that updates task

  edit.textContent = "edit"; //for now, will update with icon
  itemDiv.appendChild(edit);

  if (task.getPriority() === 'high') {
    const priorty = document.createElement('p'); //change to icon?
    priorty.textContent = "!";
    itemDiv.appendChild(priorty);
  }

  itemDiv.classList.add(task.getPriority());

  return itemDiv;
}

export function addNewFormBtns(parent) {
  const newFormBtnsDiv = document.createElement('div');
  newFormBtnsDiv.classList.add('new-buttons-div');
  const newProject = document.createElement('button');
  newProject.textContent = "New Project";
  newProject.id = "new-project";

  newFormBtnsDiv.appendChild(newProject);

  const newTask = document.createElement('button');
  newTask.textContent = "New Task";
  newTask.id = "new-task"; 
  
  newFormBtnsDiv.appendChild(newTask);

  parent.appendChild(newFormBtnsDiv);
}