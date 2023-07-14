import { orderByDate } from "./order.js";
import { Todo } from "./todo.js";

//if todo has project and task imported, shouldn't need it here??

export function navComponent(todos, parent) {
  //draws buttons to task views: today, upcoming, anytime, complete
  const navDiv = document.createElement('nav');

  const tasksDiv = document.createElement('div');
  const buttons = ['Today', 'Upcoming', 'Anytime', 'Completed'];

  for (const b of buttons) {
    const btn = document.createElement('button');
    btn.textContent = b;
    btn.id = b.toLowerCase(); //do i actually need this?
    tasksDiv.appendChild(btn);
  }

  navDiv.appendChild(tasksDiv);

  const projectsDiv = document.createElement('div');

  const projects = todos.getProjects();

  for (const cat in projects) {
    const projectDiv = document.createElement('div');
    const title = document.createElement('h3'); //h1 and h2 will be in the main content part
    title.textContent = cat;
    projectDiv.appendChild(title);

    for (const p of projects[cat]) { //THIS WILL PROBABLY CHANGE -- also not in order of date yet
      const projectItem = document.createElement('button');
      projectItem.classList.add("project-item");
      projectItem.textContent = p.getTitle();
      projectDiv.appendChild(projectItem);
    }

    projectsDiv.appendChild(projectDiv);
  }
  navDiv.appendChild(projectsDiv);

  //draws each category of project, with projects from that category listed (in order of date)
  parent.appendChild(navDiv);
}