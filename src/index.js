import './style.css';
import { navComponent } from "./nav.js";
import { tasksComponent } from "./tasksComponent.js";
import { Todo } from "./todo.js";

(function () {
  const data = localStorage.getItem('todos');
  const todos = Todo();

  if (data) {
    todos.fromJson(data);
  }

  const navParent = document.querySelector('header');
  navComponent(todos, navParent);
  const content = document.getElementById('content');
  tasksComponent(todos, "All", content);
})();