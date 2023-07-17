
function createNewProjectForm() {
  const f = document.createElement('form');
  //needs title, description, date, time, category

  const titleField = createSimpleInput("title", "text", "Title: *", "Project must have a title.");
  f.appendChild(titleField);

  const categoryField = createSimpleInput("category", "text", "Category: *", "Project must have a category.")
  f.appendChild(categoryField);

  const dateField = createSimpleInput("date", "date", "Deadline:", "");
  f.appendChild(dateField);

  const timeField = createSimpleInput("time", "time", "Time:", "");
  f.appendChild(timeField);

  const description = createTextarea("description", "Description:", "");
  f.appendChild(description);
  //and an event listener to call function to 1. validate and 2. create new project item

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";

  submitBtn.addEventListener("click", () => {

  });

  return f;
}

function createNewTaskForm() {
  const f = document.createElement('form');
  //needs description, projectTitle, priority, date, time, category
  const description = createSimpleInput("description", "text", "I need to:", "Task must have content");
  f.appendChild(description);

  const projects = []; //need to get all the projects from todo
  const projectTitle = createOptionsInput("projectTitle", projects, "Project: *", "Task must belong to a project.");
  f.appendChild(projectTitle);

  const priority = createOptionsInput("priority", ["low", "medium", "high"], "Priority: *", "Task must have a priority.");
  f.appendChild(priority);

  const dateField = createSimpleInput("date", "date", "Deadline:", "");
  f.appendChild(dateField);

  const timeField = createSimpleInput("time", "time", "Time:", "");
  f.appendChild(timeField);

  const categoryField = createSimpleInput("category", "text", "Category: *", "Project must have a category.")
  f.appendChild(categoryField);

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";

  submitBtn.addEventListener("click", () => {

  });

  return f;
}

function createSimpleInput(id, type, labelText, warning) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const field = document.createElement('input');
  field.type = type;
  field.id = id;

  const fieldLabel = document.createElement('label');
  fieldLabel.textContent = labelText;
  fieldLabel.htmlFor = id;

  const notice = document.createAttribute('p');
  notice.textContent = warning;
  notice.classList.add('warning');

  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(notice);
  fieldDiv.appendChild(field);

  return fieldDiv;
}

function createOptionsInput(id, options, labelText, warning) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const field = document.createElement('select');
  field.id = id;

  const fieldLabel = document.createElement('label');
  fieldLabel.textContent = labelText;
  fieldLabel.htmlFor = id;

  const notice = document.createAttribute('p');
  notice.textContent = warning;
  notice.classList.add('warning');

  for (const opt of options) {
    const selectOption = document.createElement('option');
    selectOption.value = opt;
    selectOption.textContent = opt;
    field.appendChild(selectOption);
  }

  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(notice);
  fieldDiv.appendChild(field);

  return fieldDiv;
}

function createTextarea(id, labelText, warning) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('input-field');

  const field = document.createElement('textarea');
  field.id = id;

  const fieldLabel = document.createElement('label');
  fieldLabel.textContent = labelText;
  fieldLabel.htmlFor = id;

  const notice = document.createAttribute('p');
  notice.textContent = warning;
  notice.classList.add('warning');

  fieldDiv.appendChild(fieldLabel);
  fieldDiv.appendChild(notice);
  fieldDiv.appendChild(field);

  return fieldDiv;
}