import { generateTaskItemId } from "./viewHelpers.js";
import Plus from "./plus.svg";
import Info from "./information-outline.svg";

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

  if (task.complete()) {
    check.checked = true;
  }

  check.addEventListener('change', (e) => {
    task.updateStatus();

    if (e.target.checked) {
      const pageTitle = document.querySelector('h1');
      if (pageTitle.textContent !== "Completed") {
        const ancestorItem = e.target.closest(".item");
        ancestorItem.classList.add("fade-out");
      }
    }
  });

  lbl.appendChild(check);

  const wrapper = document.createElement('div');
  wrapper.classList.add("item-content");

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

  wrapper.appendChild(labelContent);

  if (task.timeFormatted() !== "") {
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

    wrapper.appendChild(time);
  }

  const edit = document.createElement('button');
  edit.classList.add("edit-button");
  edit.dataset.taskId = `${task.getId()}`; //to be used in event listener that updates task

  const editIcon = new Image();
  editIcon.src = Info;
  editIcon.classList.add("icon");
  editIcon.dataset.taskId = `${task.getId()}`;
  edit.appendChild(editIcon);
  
  wrapper.appendChild(edit);

  if (task.getPriority() === 'high') {
    const priorty = document.createElement('p'); //change to icon?
    priorty.textContent = "!";
    wrapper.appendChild(priorty);
  }

  lbl.appendChild(wrapper);

  itemDiv.classList.add(task.getPriority());

  itemDiv.appendChild(lbl);

  return itemDiv;
}

export function addNewFormBtns(parent) {
  const newFormBtnsDiv = document.createElement('div');
  newFormBtnsDiv.classList.add('new-buttons-div');

  const plusIcon1 = new Image();
  plusIcon1.src = Plus;

  const newProject = document.createElement('button');
  newProject.id = "new-project";
  newProject.appendChild(plusIcon1);
  const pcopy = document.createElement('p');
  pcopy.textContent = "New Project";
  newProject.appendChild(pcopy);

  newFormBtnsDiv.appendChild(newProject);

  const plusIcon2 = new Image();
  plusIcon2.src = Plus;

  const newTask = document.createElement('button');
  newTask.id = "new-task"; 
  newTask.appendChild(plusIcon2);
  const taskcopy = document.createElement('p');
  taskcopy.textContent = "New Task";
  newTask.appendChild(taskcopy);
  
  newFormBtnsDiv.appendChild(newTask);

  parent.appendChild(newFormBtnsDiv);
}