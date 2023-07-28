import {
  orderByDate,
  sameDay,
  getDivTitle,
  generateTaskItemId,
} from "./viewHelpers.js";
import {
  createTaskGroup,
  createTaskItem,
  addNewFormBtns,
  addElement,
} from "./subcomponents.js";
import { projectFormComponent, taskFormComponent } from "./forms.js";
import { updateStorage } from "./storage.js";

export function tasksComponent(todos, taskSubset, parent) {
  parent.textContent = "";

  addNewFormBtns(parent);
  addNewButtonListeners(parent, todos, taskSubset);

  const tasks = todos[`get${taskSubset}Tasks`]();

  const component = addElement("div", parent, ["component"]);
  const title = addElement(
    "h1",
    component,
    [],
    taskSubset === "Today" ? "Tasks" : taskSubset
  );

  addElement("div", component, [], null, { id: "form" });

  if (tasks.length === 0) {
    addElement("p", component, [], "No tasks", { id: "no-tasks-message" });
    return;
  }

  const sortedTasks = orderByDate(tasks);

  const tasksDiv = addElement("div", component, ["main-content"]);

  let currDate = sortedTasks[0].getDateAsDate();
  let currDiv = createTaskGroup(tasksDiv, getDivTitle(currDate));

  for (const t of sortedTasks) {
    if (sameDay(t.getDateAsDate(), currDate)) {
      createTaskItem(currDiv, todos, t);
    } else {
      currDate = t.getDateAsDate();
      currDiv = createTaskGroup(tasksDiv, getDivTitle(currDate));
      createTaskItem(currDiv, todos, t);
    }
  }
  addEditButtonListeners(parent, todos, taskSubset);

  if (taskSubset === "Completed") {
    const clearCompleted = addElement(
      "button",
      title,
      ["clear-deleted"],
      "delete all"
    );
    clearCompleted.addEventListener("click", () => {
      todos.clearCompletedTasks();
      updateStorage(todos);

      tasksComponent(todos, "Completed", parent);
    });
  }
}

function addNewButtonListeners(parent, todos, taskSubset) {
  const newProject = document.getElementById("new-project");
  const newTask = document.getElementById("new-task");

  newProject.addEventListener("click", () => {
    const nodeToReplace = document.getElementById("form");
    projectFormComponent(parent, nodeToReplace, todos);
  });

  newTask.addEventListener("click", () => {
    const nodeToReplace = document.getElementById("form");
    taskFormComponent(parent, nodeToReplace, todos, taskSubset, null);
  });
}

function addEditButtonListeners(parent, todos, taskSubset) {
  const editBtns = document.querySelectorAll(".edit-button");
  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", (e) => {
      const nodeToReplace = document.getElementById(
        generateTaskItemId(e.target.dataset.taskid)
      );
      const task = todos.getTaskById(parseInt(e.target.dataset.taskid));
      taskFormComponent(parent, nodeToReplace, todos, taskSubset, null, task);
    });
  }
}
