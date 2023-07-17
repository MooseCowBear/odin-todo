import { navComponent } from "./nav.js";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { Todo } from "./todo.js";


//some dummy data 
const todos = Todo(); 

const p1 = Project("Project One", "some description...", "2023-07-20", "13:00", "work");
const p2 = Project("Project Two", "some description....", "2023-07-20", "07:00", "work");
const p3 = Project("Project Three", "some description...", "2023-09-01", "", "work");

const tasksArgs = [["a thing that must be done", "Project One", "high", "2023-07-17", "12:00"],
                    ["another thing to do", "Project One", "low", "2023-07-17", ""],
                    ["a third thing", "Project Two", "low", "2023-07-18", ""]
];

for (let i = 0; i < tasksArgs.length; i++) {
  const args = tasksArgs[i];
  const t = Task(...args);
  const project = i === 2 ? p2 : p1
  project.addTask(t, t.getCategory());
}
todos.addProject(p1, p1.getCategory());
todos.addProject(p2, p2.getCategory());
todos.addProject(p3, p3.getCategory());

console.log(todos.getProjects());
console.log(todos.getTasks(false, false, false));

(function () {
  //test drawing the nav bar
  const navParent = document.querySelector('header');
  navComponent(todos, navParent);
})();