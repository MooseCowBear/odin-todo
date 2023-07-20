import { orderByDate, getCategories } from "./viewHelpers.js";
import { tasksComponent } from "./tasksComponent.js";
import { projectComponent } from "./projectComponent.js";
import List from "./images/format-list-bulleted.svg";
import Alarm from "./images/alarm.svg";
import Calendar from "./images/calendar-month.svg";
import Check from "./images/check-circle.svg";
import Circle from "./images/circle.svg";
import { addElement, addImage } from "./subcomponents.js";

export function navComponent(todos, parent) {
  parent.textContent = ""

  const component = addElement('nav', parent, ['nav']);
  const tasksDiv = addElement('div', component, []);
  addElement('h2', tasksDiv, [], "Tasks");

  const buttons = ['All', 'Today', 'Upcoming', 'Completed'];
  const icons = [List, Alarm, Calendar, Check];

  for (let i = 0; i < buttons.length; i ++) {
    const buttonWrapper = addElement('div', tasksDiv, ['nav-button-wrapper']);
    addImage(icons[i], buttonWrapper, ['icon']);
    addElement('button', buttonWrapper, [], buttons[i]);
  }

  addTaskListener(tasksDiv, todos);

  const projectsDiv = addElement('div', component, []);
  addElement('h2', projectsDiv, [], 'Projects');

  const projects = todos.getProjects();

  for (const cat of getCategories(projects)) {
    const projectDiv = addElement('div', projectsDiv, ['project-div']);
    addElement('h3', projectDiv, [], cat);

    const sortedProjects = orderByDate(projects.filter(elem => elem.getCategory() === cat));

    for (const p of sortedProjects) { 
      const buttonWrapper = addElement('div', projectDiv, ['nav-button-wrapper'])
      addImage(Circle, buttonWrapper, ['small-icon']);
      addElement('button', buttonWrapper, ['project-item'], p.getTitle(), {"data-id": p.getId()})
    }
  }
  addProjectListener(projectsDiv, todos);
}

function addTaskListener(buttonDiv, todos) {
  buttonDiv.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const content = document.getElementById('content');

      tasksComponent(todos, e.target.textContent, content);
    }
  });
}

function addProjectListener(buttonDiv, todos) {
  buttonDiv.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const content = document.getElementById('content');

      projectComponent(todos, parseInt(e.target.dataset.id), content);
    }
  });
}