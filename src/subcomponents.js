
export function createTaskGroup(groupTitle) {
  const groupDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = groupTitle;
  groupDiv.appendChild(title);

  return groupDiv;
}

export function createTaskItem(task, includeDate = false) {
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
  timeContent.textContent = task.timeFormatted(); 
  time.appendChild(timeContent);

  if (includeDate) {
    const dateContent = document.createElement('span');
    dateContent.textContent = task.dateFormatted();
    time.appendChild(dateContent);
  }

  itemDiv.appendChild(time);
  return itemDiv;
}