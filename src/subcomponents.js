import { generateTaskItemId } from "./viewHelpers.js";
import { updateStorage } from "./storage.js";
import Plus from "./plus.svg";
import Info from "./information-outline.svg";

export function addElement(type, parent, classes, textContent = null, options = {}){
  const elem = document.createElement(type);
  parent.appendChild(elem);
  elem.classList.add(...classes);

  if (textContent) elem.textContent = textContent; 

  for (const o in options) {
    elem.setAttribute(o, options[o]);
  }
  return elem;
};

export function addImage(src, parent, classes = [], options = {}) {
  const image = new Image();
  image.src = src;
  image.classList.add(...classes);
  parent.appendChild(image);

  for (const o in options) {
    image.setAttribute(o, options[o]);
  }
}

export function addNewFormBtns(parent) {
  const newFormBtnsDiv = addElement('div', parent, ['new-buttons-div']);
  const newProject = addElement('button', newFormBtnsDiv, [], null, {id: "new-project"});
  addImage(Plus, newProject);
  addElement('p', newProject, [], "New Project");

  const newTask = addElement('button', newFormBtnsDiv, [], null, {id: "new-task"});
  addImage(Plus, newTask);
  addElement('p', newTask, [], "New Task");
}

export function createTaskGroup(parent, groupTitle) {
  const groupDiv = addElement('div', parent, ['task-group']);
  addElement('h2', groupDiv, [], groupTitle);

  return groupDiv;
}

export function createTaskItem(parent, todos, task, includeDate = false, onTasksPage = true) { 
  const itemDiv = addElement('div', parent, ['item', task.getPriority()], null, {id: generateTaskItemId(task.getId())});
  const lbl = addElement('label', itemDiv, []);
  const check = addElement('input', lbl, [], null, {type: 'checkbox'});

  if (task.complete()) {
    check.checked = true;
    check.disabled = true;
  }
  else {
    check.addEventListener('change', (e) => {
      task.updateStatus();
      updateStorage(todos);

      if (e.target.checked) {
        const pageTitle = document.querySelector('h1');
        if (pageTitle.textContent !== "Completed") {
          const ancestorItem = e.target.closest(".item");
          ancestorItem.classList.add("fade-out");
        }
      }
    });
  }

  const wrapper = addElement('div', lbl, ['item-content']);
  const labelContent = addElement('span', wrapper, ['label-content']);
  addElement('span', labelContent, [], task.getDescription());

  if (task.getProjectId() > 0 && onTasksPage) {
    addElement('span', labelContent, ['project-title'], todos.getProjectById(task.getProjectId()).getTitle());
  }

  if (task.timeFormatted() !== "") {
    const time = addElement('div', wrapper, ['datetime-display']);

    if (includeDate) {
      addElement('span', time, [], task.dateFormatted());
    }
    addElement('span', time, [], task.timeFormatted());
  }

  const edit = addElement('button', wrapper, ['edit-button'], null, {"data-taskId": task.getId()});
  addImage(Info, edit, ['icon'], {"data-taskId": task.getId()});
  if (task.complete()) {
    edit.disabled = true;
  }

  if (task.getPriority() === 'high') {
    addElement('p', wrapper, [], "!");
  }
  return itemDiv;
}