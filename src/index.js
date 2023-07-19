import './style.css';
import { navComponent } from "./nav.js";
import { tasksComponent } from "./tasksComponent.js";
import { Todo } from "./todo.js";

(function () {
  const data = localStorage.getItem('todos');
  console.log(data);

  const todos = Todo();

  if (data) {
    todos.fromJson(data);
    console.log(todos);
    console.log(todos.getProjects().map(elem => elem.getTitle()));
    console.log(todos.getTasks().map(elem => elem.getDescription()));
  }

  const navParent = document.querySelector('header');
  navComponent(todos, navParent);
  const content = document.getElementById('content');
  tasksComponent(todos, "All", content);
})();