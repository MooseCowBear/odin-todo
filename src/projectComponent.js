import { orderByDate } from "./order.js";
import { createTaskGroup, createTaskItem } from "./subcomponents.js";

export function projectComponent(project, parent) {
  parent.textContent = "";

  const component = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = project.getTitle();
  component.appendChild(title);

  const projectDiv = document.createElement('div');

  const tasks = project.getTasks();

  for (const cat in tasks) {
    //create task group 
    const group = createTaskGroup(cat);

    //now list the tasks for each category
    const sortedTasks = orderByDate(tasks[cat]);

    for (const t of sortedTasks) {
      const item = createTaskItem(t, true);
      group.appendChild(item);
    }
    projectDiv.appendChild(group);
  }
  component.appendChild(projectDiv);
  parent.appendChild(component);
}