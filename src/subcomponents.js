
export function createTaskGroup(groupTitle) {
  const groupDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = groupTitle;
  groupDiv.appendChild(title);

  return groupDiv;
}

//need to add button to edit/delete
export function createTaskItem(task, includeDate = false) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');
  const lbl = document.createElement('label');
  const check = document.createElement('input');
  check.type = 'checkbox'; 
  check.dataset.taskId = `${task.getId()}` //to be used in event listener that updates status of task

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
    const priorty = document.createElement('p'); //change to icon?
    priorty.textContent = "!";
    itemDiv.appendChild(priorty);
  }

  const time = document.createElement('div');

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