import { navComponent } from "./nav.js";
import { Todo } from "./todo.js";


//some dummy data -NEEDS UPDATING
const todos = Todo(); 

todos.createProject("Project One", "some description...", "2023-07-20", "13:00", "work");
todos.createProjectProject("Project Two", "some description....", "2023-07-20", "07:00", "work");
todos.createProject("Project Three", "some description...", "2023-09-01", "", "work");

//createTask = (description, projectId, priority, date, time, category)

todos.createTask("a thing that must be done", 1, "high", "2023-07-17", "12:00", "misc");
todos.createTask("another thing to do", 1, "low", "2023-07-17", "", "misc");
todos.createTask("a third thing", 2, "low", "2023-07-18", "", "some other category");

console.log(todos.getProjects());
console.log(todos.getTasks());

(function () {
  //test drawing the nav bar
  const navParent = document.querySelector('header');
  navComponent(todos, navParent);
})();