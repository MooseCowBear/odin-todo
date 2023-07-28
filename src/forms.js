import { projectComponent } from "./projectComponent.js";
import { tasksComponent } from "./tasksComponent.js";
import { navComponent } from "./nav.js";
import { addElement } from "./subcomponents.js";
import { updateStorage } from "./storage.js";

export function projectFormComponent(
  parent,
  nodeToReplace,
  todos,
  project = null
) {
  const component = addFormComponent(nodeToReplace);
  const f = addElement("form", component, []);

  const titleField = createSimpleInput(
    f,
    project,
    "title",
    "text",
    "Title: *",
    "Project must have a title."
  );
  const categoryField = createSimpleInput(
    f,
    project,
    "category",
    "text",
    "Category:",
    ""
  );
  const dateField = createSimpleInput(
    f,
    project,
    "date",
    "date",
    "Deadline:",
    ""
  );
  const timeField = createSimpleInput(f, project, "time", "time", "Time:", "");
  const descriptionField = createTextarea(
    f,
    project,
    "description",
    "Description:"
  );

  const submitBtn = addElement("input", f, [], null, { type: "submit" });

  const buttonsDiv = addElement("div", f, ["button-div"]);
  const cancel = addElement("button", buttonsDiv, [], "Cancel");

  if (project) {
    const deleteBtn = addElement(
      "button",
      buttonsDiv,
      ["delete-btn"],
      "Delete Project"
    );

    deleteBtn.addEventListener("click", () => {
      todos.deleteProject(project.getId());
      tasksComponent(todos, "All", parent); //want to go to "home" + also need to redraw nav!
      navComponent(todos, document.querySelector("header"));
      updateStorage(todos);
    });
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const validates = validateInput([titleField]);
    if (!validates) return;

    if (project) {
      todos.updateProject(
        project.getId(),
        titleField.value,
        descriptionField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      projectComponent(todos, project.getId(), parent);
    } else {
      const projectId = todos.createProject(
        titleField.value,
        descriptionField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      projectComponent(todos, projectId, parent);
    }
    //redraw nav, bc might have changed title even if just update
    navComponent(todos, document.querySelector("header"));
    updateStorage(todos);
  });

  cancel.addEventListener("click", () => {
    component.replaceWith(nodeToReplace);
  });
}

export function taskFormComponent(
  parent,
  nodeToReplace,
  todos,
  taskSubset,
  projectID,
  task = null
) {
  const component = addFormComponent(nodeToReplace);
  const f = addElement("form", component, []);

  const descriptionField = createSimpleInput(
    f,
    task,
    "description",
    "text",
    "Task: *",
    "Must have task."
  );
  let projectField;

  if (!task && !projectID) {
    const projects = todos.getProjects();
    projectField = createProjectSelect(f, task, projects);
  } else if (!task && projectID) {
    projectField = addElement("input", f, [], null, {
      type: "hidden",
      value: projectID,
      id: "project",
    });
  }

  const priorityField = createPrioritySelect(f, task, [
    "low",
    "medium",
    "high",
  ]);
  const dateField = createSimpleInput(f, task, "date", "date", "Deadline:", "");
  const timeField = createSimpleInput(f, task, "time", "time", "Time:", "");
  const categoryField = createSimpleInput(
    f,
    task,
    "category",
    "text",
    "Category:"
  );

  const submitBtn = addElement("input", f, [], null, { type: "submit" });

  const buttonsDiv = addElement("div", f, ["button-div"]);
  const cancel = addElement("button", buttonsDiv, [], "Cancel");

  if (task) {
    const deleteBtn = addElement(
      "button",
      buttonsDiv,
      ["delete-btn"],
      "Delete Task"
    );

    deleteBtn.addEventListener("click", () => {
      todos.deleteTask(task.getId());

      if (taskSubset) {
        tasksComponent(todos, taskSubset, parent);
      } else {
        projectComponent(todos, projectID, parent);
      }
      updateStorage(todos);
    });
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const validates = validateInput([descriptionField]);
    if (!validates) return;

    if (task) {
      todos.updateTask(
        task.getId(),
        descriptionField.value,
        priorityField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      updateStorage(todos);

      if (taskSubset) {
        tasksComponent(todos, taskSubset, parent);
      } else {
        projectComponent(todos, projectID, parent);
      }
    } else {
      todos.createTask(
        descriptionField.value,
        projectField.value,
        priorityField.value,
        dateField.value,
        timeField.value,
        categoryField.value
      );
      updateStorage(todos);

      const noTaskMessage = document.getElementById("no-task-message");
      if (noTaskMessage) {
        noTaskMessage.remove();
      }

      if (taskSubset) {
        tasksComponent(todos, "All", parent);
      } else {
        projectComponent(todos, projectID, parent);
      }
    }
  });

  cancel.addEventListener("click", () => {
    component.replaceWith(nodeToReplace);
  });
}

function addFormComponent(nodeToReplace) {
  const component = document.createElement("div");
  component.id = "form";
  component.classList.add("form");
  nodeToReplace.replaceWith(component);

  return component;
}

function createSimpleInput(parent, elem, id, type, labelText, warning) {
  const fieldDiv = addElement("div", parent, ["input-field"]);
  const labelWrapper = addElement("div", fieldDiv, ["label-wrapper"]);
  addElement("label", labelWrapper, [], labelText, { htmlFor: id });
  addElement("p", labelWrapper, ["warning"], warning);
  const field = addElement("input", fieldDiv, [], null, { type: type, id: id });

  if (elem) {
    field.value = elem[`get${id.charAt(0).toUpperCase() + id.slice(1)}`]();
  }
  return field;
}

function createProjectSelect(parent, task, options) {
  const fieldDiv = addElement("div", parent, ["input-field"]);
  addElement("label", fieldDiv, [], "Project:", { htmlFor: "project" });
  const selectWrapper = addElement("div", fieldDiv, ["select"]);
  const field = addElement("select", selectWrapper, [], null, {
    id: "project",
  });

  const noneOption = addElement("option", field, [], "None", { value: 0 });

  if (!task) {
    noneOption.selected = true;
  }

  for (const opt of options) {
    const selectOption = addElement("option", field, [], opt.getTitle(), {
      value: opt.getId(),
    });

    if (task && task.getProjectId() === opt.getId()) {
      selectOption.selected = true;
    }
  }
  return field;
}

function createPrioritySelect(parent, task, options) {
  const fieldDiv = addElement("div", parent, ["input-field"]);
  addElement("label", fieldDiv, [], "Priority", { htmlFor: "priority" });
  const selectWrapper = addElement("div", fieldDiv, ["select"]);
  const field = addElement("select", selectWrapper, [], null, {
    id: "priority",
  });

  for (const opt of options) {
    const selectOption = addElement("option", field, [], opt, { value: opt });

    if (task && opt === task.getPriority()) {
      selectOption.selected = true;
    }
  }
  return field;
}

function createTextarea(parent, elem, id, labelText) {
  const fieldDiv = addElement("div", parent, ["input-field"]);
  addElement("label", fieldDiv, [], labelText, { htmlFor: id });
  const field = addElement("textarea", fieldDiv, [], null, { id: id });

  if (elem) {
    field.value = elem[`get${id.charAt(0).toUpperCase() + id.slice(1)}`]();
  }

  return field;
}

function validateInput(fields) {
  let good = true;
  for (const f of fields) {
    if (f.value.trim() === "") {
      good = false;
      const theForm = f.closest("form");
      const warning = theForm.querySelector(".warning");
      warning.classList.add("show");
    }
  }
  return good;
}
