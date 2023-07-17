import { orderByDate, getCategories } from "./viewHelpers.js";
import { createTaskGroup, createTaskItem } from "./subcomponents.js";

export function projectComponent(todos, projectId, parent) {
  parent.textContent = "";

  const component = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = todos.getProjectById(projectId).getTitle();
  component.appendChild(title);

  const projectDiv = document.createElement('div');

  const tasks = todos.getTasksByProjectId(projectId);

  for (const cat of getCategories(tasks)) { 
    //create task group 
    const group = createTaskGroup(cat);
    //now list the tasks for each category
    const sortedTasks = orderByDate(tasks.filter(elem => elem.getCategory() === cat));

    for (const t of sortedTasks) {
      const item = createTaskItem(t, true);
      group.appendChild(item);
    }
    projectDiv.appendChild(group);
  }
  component.appendChild(projectDiv);
  parent.appendChild(component);
}