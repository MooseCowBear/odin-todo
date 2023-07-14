import { navComponent } from "./nav.js";
import { Todo } from "./todo.js";

console.log("up and running!");

const todos = Todo();

(function () {
  //test drawing the nav bar
  const content = document.getElementById('content');

  navComponent(todos, content);
})();