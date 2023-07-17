import { orderByDate } from "./order.js";
import { tasksComponent } from "./tasksComponent.js";

//need to add event listeners! becaause each component is going to have actions... 
//going to need to add them in the component

export function navComponent(todos, parent) {
  //draws buttons to task views: today, upcoming, anytime, complete
  const component = document.createElement('nav');

  const tasksDiv = document.createElement('div');
  const buttons = ['Today', 'Upcoming', 'Anytime', 'Completed'];

  for (const b of buttons) {
    const btn = document.createElement('button');
    btn.textContent = b;
    tasksDiv.appendChild(btn);
  }

  addTaskListener(tasksDiv, parent, todos);
  component.appendChild(tasksDiv);

  const projectsDiv = document.createElement('div');

  const projects = todos.getProjects();

  for (const cat in projects) {
    const projectDiv = document.createElement('div');
    const title = document.createElement('h3'); //h1 and h2 will be in the main content part
    title.textContent = cat;
    projectDiv.appendChild(title);

    const sortedProjects = orderByDate(projects[cat]);

    for (const p of sortedProjects) { //THIS WILL PROBABLY CHANGE
      const projectItem = document.createElement('button');
      projectItem.classList.add("project-item");
      projectItem.textContent = p.getTitle();
      projectDiv.appendChild(projectItem);
    }
    projectsDiv.appendChild(projectDiv);
  }
  
  addProjectListener(projectsDiv);
  component.appendChild(projectsDiv);

  //draws each category of project, with projects from that category listed (in order of date)
  parent.appendChild(component);
}

function getTaskComponentArgs(choice) { //maybe taskcomponent should do this? 
  const args = {
    "today": [true, false, false],
    "upcoming": [false, true, false],
    "anytime": [false, false, false],
    "completed": [false, false, true]
  }
  return args[choice];
}

function addTaskListener(buttonDiv, parent, todos) {
  buttonDiv.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const args = getTaskComponentArgs(e.target.textContent.toLowerCase());
      const tasks = todos.getTasks(...args);
      tasksComponent(tasks, parent);
    }
  });
}

function getProjectComponentArg(choice, category, todos) {
  todos.findProject(choice, category);
}

function addProjectListener(buttonDiv, parent, todos) {
  buttonDiv.addButtonListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const cat = e.target.parent.querySelector('h3').textContent;
      const arg = getProjectComponentArg(e.target.textContent, cat);
      const project = todos.findProject(arg, cat);
      projectComponent(project, parent);
    }
  });
}