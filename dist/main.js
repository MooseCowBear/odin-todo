/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navComponent: () => (/* binding */ navComponent)
/* harmony export */ });
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.js */ "./src/order.js");
/* harmony import */ var _tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksComponent.js */ "./src/tasksComponent.js");
/* harmony import */ var _projectComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectComponent.js */ "./src/projectComponent.js");




//need to add event listeners! becaause each component is going to have actions... 
//going to need to add them in the component

function navComponent(todos, parent) {
  //draws buttons to task views: today, upcoming, anytime, complete
  const component = document.createElement('nav');

  const tasksDiv = document.createElement('div');
  const buttons = ['Today', 'Upcoming', 'Anytime', 'Completed'];

  for (const b of buttons) {
    const btn = document.createElement('button');
    btn.textContent = b;
    tasksDiv.appendChild(btn);
  }

  addTaskListener(tasksDiv, todos);
  component.appendChild(tasksDiv);

  const projectsDiv = document.createElement('div');

  const projects = todos.getProjects();

  for (const cat in projects) {
    const projectDiv = document.createElement('div');
    const title = document.createElement('h3'); //h1 and h2 will be in the main content part
    title.textContent = cat;
    projectDiv.appendChild(title);

    const sortedProjects = (0,_order_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(projects[cat]);

    for (const p of sortedProjects) { //THIS WILL PROBABLY CHANGE
      const projectItem = document.createElement('button');
      projectItem.classList.add("project-item");
      projectItem.textContent = p.getTitle();
      projectDiv.appendChild(projectItem);
    }
    projectsDiv.appendChild(projectDiv);
  }

  addProjectListener(projectsDiv, todos);
  component.appendChild(projectsDiv);

  //draws each category of project, with projects from that category listed (in order of date)
  parent.appendChild(component);
}

function getTaskComponentArgs(choice) { //maybe taskcomponent should do this? 
  const args = {
    "today": [true, false, false],
    "upcoming": [false, true, false],
    "anytime": [false, false, false],
    "completed": [false, false, true]
  }
  return args[choice];
}

function addTaskListener(buttonDiv, todos) {
  buttonDiv.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const content = document.getElementById('content');
      const args = getTaskComponentArgs(e.target.textContent.toLowerCase());
      const tasks = todos.getTasks(...args);
      (0,_tasksComponent_js__WEBPACK_IMPORTED_MODULE_1__.tasksComponent)(tasks, content);
    }
  });
}

function addProjectListener(buttonDiv, todos) {
  buttonDiv.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const content = document.getElementById('content');
      const cat = e.target.parentNode.querySelector('h3').textContent;
      const project = todos.findProject(e.target.textContent, cat);
      (0,_projectComponent_js__WEBPACK_IMPORTED_MODULE_2__.projectComponent)(project, content);
    }
  });
}

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orderByDate: () => (/* binding */ orderByDate)
/* harmony export */ });
function orderByDate(objectsWithDate) {
  //this should work for both tasks and projects, which is what we want...
  return objectsWithDate.sort( function(a, b) {
    if (a.getDate() && b.getDate()) {
      if (a.getDate() > b.getDate()) {
        return 1;
      }
      else if (a.getDate() < b.getDate()) {
        return -1;
      }
      else {
        return 0;
      }
    }
    else if (a.getDate()) {
      return 1;
    }
    else if (b.getDate()) {
      return -1;
    }
    else {
      return 0;
    }
  });
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _schedulable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedulable.js */ "./src/schedulable.js");


const Project = (title, description, date, time, category) => {
  const schedulable = (0,_schedulable_js__WEBPACK_IMPORTED_MODULE_0__.Schedulable)(date, time);

  const tasks = { misc: [] };

  const getTitle = () => {
    return title;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const getDescription = () => {
    return description;
  };

  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getCategory = () => {
    return category;
  };

  const addTask = (task, taskCategory) => {
    if (taskCategory in tasks) {
      tasks[taskCategory].push(task);
    }
    else {
      tasks[taskCategory] = [];
      tasks[taskCategory].push(task);
    }
  };

  const getTasksByCategory = (cat) => {
    return tasks[cat];
  };

  const getTasks = () => {
    return tasks;
  };

  const removeTask = (index) => {
    tasks.splice(index, 1);
  };

  const complete = () => {
    for (const cat in tasks) {
      for (const task of tasks[cat]) {
        if (!task.complete()) {
          return false;
        }
      }
    }
    return true;
  };

  return {
    ...schedulable,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getCategory,
    addTask,
    getTasksByCategory,
    getTasks,
    removeTask, 
    complete
  };
};

/***/ }),

/***/ "./src/projectComponent.js":
/*!*********************************!*\
  !*** ./src/projectComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectComponent: () => (/* binding */ projectComponent)
/* harmony export */ });
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.js */ "./src/order.js");
/* harmony import */ var _subcomponents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcomponents.js */ "./src/subcomponents.js");



function projectComponent(project, parent) {
  console.log("PROJECT", project, project.getTitle());
  parent.textContent = "";

  const component = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = project.getTitle();
  component.appendChild(title);

  const projectDiv = document.createElement('div');

  const tasks = project.getTasks();

  for (const cat in tasks) {
    //create task group 
    const group = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)(cat);

    //now list the tasks for each category
    const sortedTasks = (0,_order_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(tasks[cat]);

    for (const t of sortedTasks) {
      const item = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(t, true);
      group.appendChild(item);
    }
    projectDiv.appendChild(group);
  }
  component.appendChild(projectDiv);
  parent.appendChild(component);
}

/***/ }),

/***/ "./src/schedulable.js":
/*!****************************!*\
  !*** ./src/schedulable.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Schedulable: () => (/* binding */ Schedulable)
/* harmony export */ });
const Schedulable = (date, time) => {
  const getDate = () => {
    if (date === "") return null;
    const timeString = time === "" ? "T23:59:59" : "T" + time + ":00";
    return new Date(date + timeString);
  };

  const dateFormatted = () => {
    if (date === "") return date;
    const month = date[5] === "0" ? date.slice(6, 7) : date.slice(5, 7);
    const day = date[8] === "0" ? date.slice(9) : date.slice(8);
    const year = date.slice(0, 4);

    return month + "/" + day + "/" + year;
  };

  const timeFormatted = () => {
    if (time === "") return time;
    let hour = parseInt(time.slice(0, 2));
    const min = time.slice(2);
    const m = hour > 12 ? "pm" : "am";
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}${min} ${m}`;
  };

  //also need set date, time for editing

  const setDate = (newDate) => {
    date = newDate;
  };

  const setTime = (newTime) => {
    time = newTime;
  };

  return {
    getDate,
    dateFormatted,
    timeFormatted,
    setDate,
    setTime
  };
}

/***/ }),

/***/ "./src/subcomponents.js":
/*!******************************!*\
  !*** ./src/subcomponents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskGroup: () => (/* binding */ createTaskGroup),
/* harmony export */   createTaskItem: () => (/* binding */ createTaskItem)
/* harmony export */ });

function createTaskGroup(groupTitle) {
  const groupDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = groupTitle;
  groupDiv.appendChild(title);

  return groupDiv;
}

function createTaskItem(task, includeDate = false) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item');
  const lbl = document.createElement('label');
  const check = document.createElement('input');
  check.type = 'checkbox'; 

  if (task.completed) {
    check.checked = true;
  }

  lbl.appendChild(check);

  const labelContent = document.createElement('span');
  const description = document.createElement('span');
  const projectTitle = document.createElement('span');

  description.textContent = task.getDescription();
  projectTitle.textContent = task.getProject();
  projectTitle.classList.add('project-title');

  labelContent.appendChild(description);
  labelContent.appendChild(projectTitle);

  lbl.appendChild(labelContent);

  itemDiv.appendChild(lbl);

  if (task.getPriority() === 'high') {
    const priorty = document.createElement('p'); //change to icon
    priorty.textContent = "!";
    itemDiv.appendChild(priorty);
  }

  const time = document.createElement('div');
  const timeContent = document.createElement('span');
  timeContent.textContent = task.timeFormatted(); 
  time.appendChild(timeContent);

  if (includeDate) {
    const dateContent = document.createElement('span');
    dateContent.textContent = task.dateFormatted();
    time.appendChild(dateContent);
  }

  itemDiv.appendChild(time);
  return itemDiv;
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _schedulable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedulable.js */ "./src/schedulable.js");


const Task = (description, projectTitle, priority, date, time, category = "misc") => {
  //need to inherit from schedulable
  const schedulable = (0,_schedulable_js__WEBPACK_IMPORTED_MODULE_0__.Schedulable)(date, time);

  let completed = false;

  const getDescription = () => {
    return description;
  };
  
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getProject = () => {
    return projectTitle;
  };

  const getCategory = () => {
    return category;
  };

  const setCategory = (newCategory) => {
    category = newCategory;
  };

  const getPriority = () => {
    return priority;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const complete = () => {
    return completed;
  };

  const updateStatus = () => {
    completed = !completed;
  };

  return {
    ...schedulable,
    getDescription,
    setDescription,
    getProject,
    getCategory,
    setCategory,
    getPriority,
    setPriority,
    complete,
    updateStatus
  };
};

/***/ }),

/***/ "./src/tasksComponent.js":
/*!*******************************!*\
  !*** ./src/tasksComponent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tasksComponent: () => (/* binding */ tasksComponent)
/* harmony export */ });
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.js */ "./src/order.js");
/* harmony import */ var _subcomponents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcomponents.js */ "./src/subcomponents.js");



function tasksComponent(tasks, parent) {
  //reset parent to be empty, then draw this component
  parent.textContent = "";

  const sortedTasks = (0,_order_js__WEBPACK_IMPORTED_MODULE_0__.orderByDate)(tasks);
  console.log("sorted tasks", sortedTasks);

  const component = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = 'Tasks';

  component.appendChild(title);

  if (sortedTasks.length === 0) {
    const message = document.createElement('p');
    message.textContent = "No tasks";
    component.appendChild(message);
    parent.appendChild(component);
    return;
  }

  const tasksDiv = document.createElement('div');

  let currDate = sortedTasks[0].getDate();
  let currDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)(getDivTitle(currDate));

  for (const t of sortedTasks) {
    const taskItem = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(t); //don't want the date, since grouped by date

    if (sameDay(t.getDate(), currDate)) {
      //append to the current div
      currDiv.appendChild(taskItem);
    }
    else {
      //done with that group
      tasksDiv.appendChild(currDiv);
      //create a new group
      currDate = t.getDate();
      currDiv = (0,_subcomponents_js__WEBPACK_IMPORTED_MODULE_1__.createTaskGroup)(getDivTitle(currDate));
      //and then append, taskItem to the new group
      currDiv.appendChild(taskItem);
    }
  }
  tasksDiv.appendChild(currDiv); //append whatever the last one was

  component.appendChild(tasksDiv);

  parent.appendChild(component);
}

function sameDay(one, two) {
  return one.getDate() === two.getDate() && 
    one.getMonth() === two.getMonth() &&
    one.getFullYear() === two.getFullYear();
}

function getDivTitle(date) {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (sameDay(date, today)) {
    return "Today";
  }
  else if (sameDay(date, tomorrow)) {
    return "Tomorrow";
  }
  else {
    return date.toDateString();
  }
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



const Todo = () => {
  const projects = {
    work: [],
    life: []
  }

  const getTasks = (wantToday, wantUpcoming, complete) => {
   let tasksArr = _getAllTasks();
   console.log("all tasks in get tasks", tasksArr);

   let today = new Date(); //want start of day
   today.setHours(0,0,0,0); 

   if (wantUpcoming) {
    tasksArr = tasksArr.filter(elem => (elem.getDate() !== null && elem.getDate() >= today));
   }
   else if (wantToday) {
    tasksArr = tasksArr.filter(elem => elem.getDate() !== null && elem.getDate().toDateString() === today.toDateString()); 
   }

   tasksArr = _filterTasks(tasksArr, complete); 

   console.log("all tasks in get tasks END", tasksArr);
   console.log(tasksArr.map(elem => elem.getDescription()));
   return tasksArr;
  };

  const _getAllTasks = () => {
    let tasksArr = [];
    for (const cat in projects) {
      for (const p of projects[cat]) {
        const projectTasks = p.getTasks();
        console.log(p.getTitle(), projectTasks);

        for (const taskCat in projectTasks) {
          tasksArr = tasksArr.concat(projectTasks[taskCat]);
        }
      }
    }
    return tasksArr; //won't be in order even if had been
  }

  const _filterTasks = (arr, complete) => {
    if (complete) {
      arr = arr.filter(elem => elem.complete());
    }
    else {
      arr = arr.filter(elem => !elem.complete());
    }
    return arr;
  }

  const getProjects = () => {
    return projects;
  };

  const addProject = (project, category) => {
    //add a new project to todo object -- just like adding tasks to projects, so refactor
    if (category in projects) {
      projects[category].push(project);
    }
    else {
      projects[category] = [];
      projects[category].push(project);
    }
  };

  const removeProject = (project, category) => {
    //remove a project
    const index = projects[category].indexOf(project);
    if (index !== -1) {
      projects[category].splice(index, 1);
    }
  };

  const findProject = (name, category) => {
    console.log("CHECK ME", projects[category]);
    const p = projects[category].filter(elem => elem.getTitle() === name);

    return p[0];
  };

  return {
    getTasks,
    getProjects,
    addProject,
    removeProject,
    findProject
  }
}

//need a find project method

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");





console.log("up and running!");

//need new dummy data that reflects changes
const todos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_3__.Todo)();
//Project = (title, description, date, time, category)
//Task = (description, projectTitle, priority, date, time, category = "misc")
//addTask = (task, taskCategory)
//addProject = (project, category) 

const p1 = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.Project)("Project One", "some description...", "2023-07-20", "13:00", "work");
const p2 = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.Project)("Project Two", "some description....", "2023-07-20", "07:00", "work");
const p3 = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.Project)("Project Three", "some description...", "2023-09-01", "", "work");

const tasksArgs = [["a thing that must be done", "Project One", "high", "2023-07-17", "12:00"],
                    ["another thing to do", "Project One", "low", "2023-07-17", ""],
                    ["a third thing", "Project Two", "low", "2023-07-18", ""]
];

for (let i = 0; i < tasksArgs.length; i++) {
  const args = tasksArgs[i];
  const t = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.Task)(...args);
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
  (0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.navComponent)(todos, navParent);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQzlGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1A7QUFDTTtBQUNOOztBQUVqQzs7QUFFQTtBQUNBLGNBQWMsOENBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxvREFBTztBQUNsQixXQUFXLG9EQUFPO0FBQ2xCLFdBQVcsb0RBQU87O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQSxZQUFZLDhDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVk7QUFDZCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9vcmRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc2NoZWR1bGFibGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N1YmNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2tzQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcmRlckJ5RGF0ZSB9IGZyb20gXCIuL29yZGVyLmpzXCI7XG5pbXBvcnQgeyB0YXNrc0NvbXBvbmVudCB9IGZyb20gXCIuL3Rhc2tzQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvamVjdENvbXBvbmVudC5qc1wiO1xuXG4vL25lZWQgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyEgYmVjYWF1c2UgZWFjaCBjb21wb25lbnQgaXMgZ29pbmcgdG8gaGF2ZSBhY3Rpb25zLi4uIFxuLy9nb2luZyB0byBuZWVkIHRvIGFkZCB0aGVtIGluIHRoZSBjb21wb25lbnRcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdkNvbXBvbmVudCh0b2RvcywgcGFyZW50KSB7XG4gIC8vZHJhd3MgYnV0dG9ucyB0byB0YXNrIHZpZXdzOiB0b2RheSwgdXBjb21pbmcsIGFueXRpbWUsIGNvbXBsZXRlXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ1dHRvbnMgPSBbJ1RvZGF5JywgJ1VwY29taW5nJywgJ0FueXRpbWUnLCAnQ29tcGxldGVkJ107XG5cbiAgZm9yIChjb25zdCBiIG9mIGJ1dHRvbnMpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBiO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gIH1cblxuICBhZGRUYXNrTGlzdGVuZXIodGFza3NEaXYsIHRvZG9zKTtcbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcblxuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTtcblxuICBmb3IgKGNvbnN0IGNhdCBpbiBwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7IC8vaDEgYW5kIGgyIHdpbGwgYmUgaW4gdGhlIG1haW4gY29udGVudCBwYXJ0XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXQ7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBzb3J0ZWRQcm9qZWN0cyA9IG9yZGVyQnlEYXRlKHByb2plY3RzW2NhdF0pO1xuXG4gICAgZm9yIChjb25zdCBwIG9mIHNvcnRlZFByb2plY3RzKSB7IC8vVEhJUyBXSUxMIFBST0JBQkxZIENIQU5HRVxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHAuZ2V0VGl0bGUoKTtcbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH1cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfVxuXG4gIGFkZFByb2plY3RMaXN0ZW5lcihwcm9qZWN0c0RpdiwgdG9kb3MpO1xuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gIC8vZHJhd3MgZWFjaCBjYXRlZ29yeSBvZiBwcm9qZWN0LCB3aXRoIHByb2plY3RzIGZyb20gdGhhdCBjYXRlZ29yeSBsaXN0ZWQgKGluIG9yZGVyIG9mIGRhdGUpXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrQ29tcG9uZW50QXJncyhjaG9pY2UpIHsgLy9tYXliZSB0YXNrY29tcG9uZW50IHNob3VsZCBkbyB0aGlzPyBcbiAgY29uc3QgYXJncyA9IHtcbiAgICBcInRvZGF5XCI6IFt0cnVlLCBmYWxzZSwgZmFsc2VdLFxuICAgIFwidXBjb21pbmdcIjogW2ZhbHNlLCB0cnVlLCBmYWxzZV0sXG4gICAgXCJhbnl0aW1lXCI6IFtmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICBcImNvbXBsZXRlZFwiOiBbZmFsc2UsIGZhbHNlLCB0cnVlXVxuICB9XG4gIHJldHVybiBhcmdzW2Nob2ljZV07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICBjb25zdCBhcmdzID0gZ2V0VGFza0NvbXBvbmVudEFyZ3MoZS50YXJnZXQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICBjb25zdCB0YXNrcyA9IHRvZG9zLmdldFRhc2tzKC4uLmFyZ3MpO1xuICAgICAgdGFza3NDb21wb25lbnQodGFza3MsIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0ZW5lcihidXR0b25EaXYsIHRvZG9zKSB7XG4gIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYnV0dG9uJykge1xuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICBjb25zdCBjYXQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2gzJykudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gdG9kb3MuZmluZFByb2plY3QoZS50YXJnZXQudGV4dENvbnRlbnQsIGNhdCk7XG4gICAgICBwcm9qZWN0Q29tcG9uZW50KHByb2plY3QsIGNvbnRlbnQpO1xuICAgIH1cbiAgfSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9yZGVyQnlEYXRlKG9iamVjdHNXaXRoRGF0ZSkge1xuICAvL3RoaXMgc2hvdWxkIHdvcmsgZm9yIGJvdGggdGFza3MgYW5kIHByb2plY3RzLCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuLi5cbiAgcmV0dXJuIG9iamVjdHNXaXRoRGF0ZS5zb3J0KCBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKGEuZ2V0RGF0ZSgpICYmIGIuZ2V0RGF0ZSgpKSB7XG4gICAgICBpZiAoYS5nZXREYXRlKCkgPiBiLmdldERhdGUoKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZSgpIDwgYi5nZXREYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChhLmdldERhdGUoKSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGIuZ2V0RGF0ZSgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgeyBTY2hlZHVsYWJsZSB9IGZyb20gXCIuL3NjaGVkdWxhYmxlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgY2F0ZWdvcnkpID0+IHtcbiAgY29uc3Qgc2NoZWR1bGFibGUgPSBTY2hlZHVsYWJsZShkYXRlLCB0aW1lKTtcblxuICBjb25zdCB0YXNrcyA9IHsgbWlzYzogW10gfTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaywgdGFza0NhdGVnb3J5KSA9PiB7XG4gICAgaWYgKHRhc2tDYXRlZ29yeSBpbiB0YXNrcykge1xuICAgICAgdGFza3NbdGFza0NhdGVnb3J5XS5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRhc2tzW3Rhc2tDYXRlZ29yeV0gPSBbXTtcbiAgICAgIHRhc2tzW3Rhc2tDYXRlZ29yeV0ucHVzaCh0YXNrKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3NCeUNhdGVnb3J5ID0gKGNhdCkgPT4ge1xuICAgIHJldHVybiB0YXNrc1tjYXRdO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGNhdCBpbiB0YXNrcykge1xuICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzW2NhdF0pIHtcbiAgICAgICAgaWYgKCF0YXNrLmNvbXBsZXRlKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zY2hlZHVsYWJsZSxcbiAgICBnZXRUaXRsZSxcbiAgICBzZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBnZXRDYXRlZ29yeSxcbiAgICBhZGRUYXNrLFxuICAgIGdldFRhc2tzQnlDYXRlZ29yeSxcbiAgICBnZXRUYXNrcyxcbiAgICByZW1vdmVUYXNrLCBcbiAgICBjb21wbGV0ZVxuICB9O1xufTsiLCJpbXBvcnQgeyBvcmRlckJ5RGF0ZSB9IGZyb20gXCIuL29yZGVyLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrR3JvdXAsIGNyZWF0ZVRhc2tJdGVtIH0gZnJvbSBcIi4vc3ViY29tcG9uZW50cy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENvbXBvbmVudChwcm9qZWN0LCBwYXJlbnQpIHtcbiAgY29uc29sZS5sb2coXCJQUk9KRUNUXCIsIHByb2plY3QsIHByb2plY3QuZ2V0VGl0bGUoKSk7XG4gIHBhcmVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgY29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuXG4gIGZvciAoY29uc3QgY2F0IGluIHRhc2tzKSB7XG4gICAgLy9jcmVhdGUgdGFzayBncm91cCBcbiAgICBjb25zdCBncm91cCA9IGNyZWF0ZVRhc2tHcm91cChjYXQpO1xuXG4gICAgLy9ub3cgbGlzdCB0aGUgdGFza3MgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgICBjb25zdCBzb3J0ZWRUYXNrcyA9IG9yZGVyQnlEYXRlKHRhc2tzW2NhdF0pO1xuXG4gICAgZm9yIChjb25zdCB0IG9mIHNvcnRlZFRhc2tzKSB7XG4gICAgICBjb25zdCBpdGVtID0gY3JlYXRlVGFza0l0ZW0odCwgdHJ1ZSk7XG4gICAgICBncm91cC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChncm91cCk7XG4gIH1cbiAgY29tcG9uZW50LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbn0iLCJleHBvcnQgY29uc3QgU2NoZWR1bGFibGUgPSAoZGF0ZSwgdGltZSkgPT4ge1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIGlmIChkYXRlID09PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gdGltZSA9PT0gXCJcIiA/IFwiVDIzOjU5OjU5XCIgOiBcIlRcIiArIHRpbWUgKyBcIjowMFwiO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlICsgdGltZVN0cmluZyk7XG4gIH07XG5cbiAgY29uc3QgZGF0ZUZvcm1hdHRlZCA9ICgpID0+IHtcbiAgICBpZiAoZGF0ZSA9PT0gXCJcIikgcmV0dXJuIGRhdGU7XG4gICAgY29uc3QgbW9udGggPSBkYXRlWzVdID09PSBcIjBcIiA/IGRhdGUuc2xpY2UoNiwgNykgOiBkYXRlLnNsaWNlKDUsIDcpO1xuICAgIGNvbnN0IGRheSA9IGRhdGVbOF0gPT09IFwiMFwiID8gZGF0ZS5zbGljZSg5KSA6IGRhdGUuc2xpY2UoOCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuc2xpY2UoMCwgNCk7XG5cbiAgICByZXR1cm4gbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcjtcbiAgfTtcblxuICBjb25zdCB0aW1lRm9ybWF0dGVkID0gKCkgPT4ge1xuICAgIGlmICh0aW1lID09PSBcIlwiKSByZXR1cm4gdGltZTtcbiAgICBsZXQgaG91ciA9IHBhcnNlSW50KHRpbWUuc2xpY2UoMCwgMikpO1xuICAgIGNvbnN0IG1pbiA9IHRpbWUuc2xpY2UoMik7XG4gICAgY29uc3QgbSA9IGhvdXIgPiAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICBob3VyID0gaG91ciA+IDEyID8gaG91ciAtIDEyIDogaG91cjtcbiAgICByZXR1cm4gYCR7aG91cn0ke21pbn0gJHttfWA7XG4gIH07XG5cbiAgLy9hbHNvIG5lZWQgc2V0IGRhdGUsIHRpbWUgZm9yIGVkaXRpbmdcblxuICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICBkYXRlID0gbmV3RGF0ZTtcbiAgfTtcblxuICBjb25zdCBzZXRUaW1lID0gKG5ld1RpbWUpID0+IHtcbiAgICB0aW1lID0gbmV3VGltZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldERhdGUsXG4gICAgZGF0ZUZvcm1hdHRlZCxcbiAgICB0aW1lRm9ybWF0dGVkLFxuICAgIHNldERhdGUsXG4gICAgc2V0VGltZVxuICB9O1xufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tHcm91cChncm91cFRpdGxlKSB7XG4gIGNvbnN0IGdyb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBncm91cFRpdGxlO1xuICBncm91cERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgcmV0dXJuIGdyb3VwRGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW0odGFzaywgaW5jbHVkZURhdGUgPSBmYWxzZSkge1xuICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICBjb25zdCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnOyBcblxuICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICBjaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGxibC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgY29uc3QgbGFiZWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLmdldFByb2plY3QoKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcblxuICBsYWJlbENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBsYWJlbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICBsYmwuYXBwZW5kQ2hpbGQobGFiZWxDb250ZW50KTtcblxuICBpdGVtRGl2LmFwcGVuZENoaWxkKGxibCk7XG5cbiAgaWYgKHRhc2suZ2V0UHJpb3JpdHkoKSA9PT0gJ2hpZ2gnKSB7XG4gICAgY29uc3QgcHJpb3J0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy9jaGFuZ2UgdG8gaWNvblxuICAgIHByaW9ydHkudGV4dENvbnRlbnQgPSBcIiFcIjtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKHByaW9ydHkpO1xuICB9XG5cbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aW1lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGltZUNvbnRlbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpbWVGb3JtYXR0ZWQoKTsgXG4gIHRpbWUuYXBwZW5kQ2hpbGQodGltZUNvbnRlbnQpO1xuXG4gIGlmIChpbmNsdWRlRGF0ZSkge1xuICAgIGNvbnN0IGRhdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRhdGVDb250ZW50LnRleHRDb250ZW50ID0gdGFzay5kYXRlRm9ybWF0dGVkKCk7XG4gICAgdGltZS5hcHBlbmRDaGlsZChkYXRlQ29udGVudCk7XG4gIH1cblxuICBpdGVtRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICByZXR1cm4gaXRlbURpdjtcbn0iLCJpbXBvcnQgeyBTY2hlZHVsYWJsZSB9IGZyb20gXCIuL3NjaGVkdWxhYmxlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0VGl0bGUsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSA9IFwibWlzY1wiKSA9PiB7XG4gIC8vbmVlZCB0byBpbmhlcml0IGZyb20gc2NoZWR1bGFibGVcbiAgY29uc3Qgc2NoZWR1bGFibGUgPSBTY2hlZHVsYWJsZShkYXRlLCB0aW1lKTtcblxuICBsZXQgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RUaXRsZTtcbiAgfTtcblxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVkdWxhYmxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIGdldFByb2plY3QsXG4gICAgZ2V0Q2F0ZWdvcnksXG4gICAgc2V0Q2F0ZWdvcnksXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgc2V0UHJpb3JpdHksXG4gICAgY29tcGxldGUsXG4gICAgdXBkYXRlU3RhdHVzXG4gIH07XG59OyIsImltcG9ydCB7IG9yZGVyQnlEYXRlIH0gZnJvbSBcIi4vb3JkZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tHcm91cCwgY3JlYXRlVGFza0l0ZW0gfSBmcm9tIFwiLi9zdWJjb21wb25lbnRzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrc0NvbXBvbmVudCh0YXNrcywgcGFyZW50KSB7XG4gIC8vcmVzZXQgcGFyZW50IHRvIGJlIGVtcHR5LCB0aGVuIGRyYXcgdGhpcyBjb21wb25lbnRcbiAgcGFyZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBzb3J0ZWRUYXNrcyA9IG9yZGVyQnlEYXRlKHRhc2tzKTtcbiAgY29uc29sZS5sb2coXCJzb3J0ZWQgdGFza3NcIiwgc29ydGVkVGFza3MpO1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuXG4gIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgaWYgKHNvcnRlZFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTm8gdGFza3NcIjtcbiAgICBjb21wb25lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBsZXQgY3VyckRhdGUgPSBzb3J0ZWRUYXNrc1swXS5nZXREYXRlKCk7XG4gIGxldCBjdXJyRGl2ID0gY3JlYXRlVGFza0dyb3VwKGdldERpdlRpdGxlKGN1cnJEYXRlKSk7XG5cbiAgZm9yIChjb25zdCB0IG9mIHNvcnRlZFRhc2tzKSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBjcmVhdGVUYXNrSXRlbSh0KTsgLy9kb24ndCB3YW50IHRoZSBkYXRlLCBzaW5jZSBncm91cGVkIGJ5IGRhdGVcblxuICAgIGlmIChzYW1lRGF5KHQuZ2V0RGF0ZSgpLCBjdXJyRGF0ZSkpIHtcbiAgICAgIC8vYXBwZW5kIHRvIHRoZSBjdXJyZW50IGRpdlxuICAgICAgY3VyckRpdi5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9kb25lIHdpdGggdGhhdCBncm91cFxuICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoY3VyckRpdik7XG4gICAgICAvL2NyZWF0ZSBhIG5ldyBncm91cFxuICAgICAgY3VyckRhdGUgPSB0LmdldERhdGUoKTtcbiAgICAgIGN1cnJEaXYgPSBjcmVhdGVUYXNrR3JvdXAoZ2V0RGl2VGl0bGUoY3VyckRhdGUpKTtcbiAgICAgIC8vYW5kIHRoZW4gYXBwZW5kLCB0YXNrSXRlbSB0byB0aGUgbmV3IGdyb3VwXG4gICAgICBjdXJyRGl2LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICB9XG4gIH1cbiAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoY3VyckRpdik7IC8vYXBwZW5kIHdoYXRldmVyIHRoZSBsYXN0IG9uZSB3YXNcblxuICBjb21wb25lbnQuYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBzYW1lRGF5KG9uZSwgdHdvKSB7XG4gIHJldHVybiBvbmUuZ2V0RGF0ZSgpID09PSB0d28uZ2V0RGF0ZSgpICYmIFxuICAgIG9uZS5nZXRNb250aCgpID09PSB0d28uZ2V0TW9udGgoKSAmJlxuICAgIG9uZS5nZXRGdWxsWWVhcigpID09PSB0d28uZ2V0RnVsbFllYXIoKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGl2VGl0bGUoZGF0ZSkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKTtcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblxuICBpZiAoc2FtZURheShkYXRlLCB0b2RheSkpIHtcbiAgICByZXR1cm4gXCJUb2RheVwiO1xuICB9XG4gIGVsc2UgaWYgKHNhbWVEYXkoZGF0ZSwgdG9tb3Jyb3cpKSB7XG4gICAgcmV0dXJuIFwiVG9tb3Jyb3dcIjtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKTtcbiAgfVxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5leHBvcnQgY29uc3QgVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSB7XG4gICAgd29yazogW10sXG4gICAgbGlmZTogW11cbiAgfVxuXG4gIGNvbnN0IGdldFRhc2tzID0gKHdhbnRUb2RheSwgd2FudFVwY29taW5nLCBjb21wbGV0ZSkgPT4ge1xuICAgbGV0IHRhc2tzQXJyID0gX2dldEFsbFRhc2tzKCk7XG4gICBjb25zb2xlLmxvZyhcImFsbCB0YXNrcyBpbiBnZXQgdGFza3NcIiwgdGFza3NBcnIpO1xuXG4gICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpOyAvL3dhbnQgc3RhcnQgb2YgZGF5XG4gICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTsgXG5cbiAgIGlmICh3YW50VXBjb21pbmcpIHtcbiAgICB0YXNrc0FyciA9IHRhc2tzQXJyLmZpbHRlcihlbGVtID0+IChlbGVtLmdldERhdGUoKSAhPT0gbnVsbCAmJiBlbGVtLmdldERhdGUoKSA+PSB0b2RheSkpO1xuICAgfVxuICAgZWxzZSBpZiAod2FudFRvZGF5KSB7XG4gICAgdGFza3NBcnIgPSB0YXNrc0Fyci5maWx0ZXIoZWxlbSA9PiBlbGVtLmdldERhdGUoKSAhPT0gbnVsbCAmJiBlbGVtLmdldERhdGUoKS50b0RhdGVTdHJpbmcoKSA9PT0gdG9kYXkudG9EYXRlU3RyaW5nKCkpOyBcbiAgIH1cblxuICAgdGFza3NBcnIgPSBfZmlsdGVyVGFza3ModGFza3NBcnIsIGNvbXBsZXRlKTsgXG5cbiAgIGNvbnNvbGUubG9nKFwiYWxsIHRhc2tzIGluIGdldCB0YXNrcyBFTkRcIiwgdGFza3NBcnIpO1xuICAgY29uc29sZS5sb2codGFza3NBcnIubWFwKGVsZW0gPT4gZWxlbS5nZXREZXNjcmlwdGlvbigpKSk7XG4gICByZXR1cm4gdGFza3NBcnI7XG4gIH07XG5cbiAgY29uc3QgX2dldEFsbFRhc2tzID0gKCkgPT4ge1xuICAgIGxldCB0YXNrc0FyciA9IFtdO1xuICAgIGZvciAoY29uc3QgY2F0IGluIHByb2plY3RzKSB7XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvamVjdHNbY2F0XSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwLmdldFRhc2tzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHAuZ2V0VGl0bGUoKSwgcHJvamVjdFRhc2tzKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHRhc2tDYXQgaW4gcHJvamVjdFRhc2tzKSB7XG4gICAgICAgICAgdGFza3NBcnIgPSB0YXNrc0Fyci5jb25jYXQocHJvamVjdFRhc2tzW3Rhc2tDYXRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFza3NBcnI7IC8vd29uJ3QgYmUgaW4gb3JkZXIgZXZlbiBpZiBoYWQgYmVlblxuICB9XG5cbiAgY29uc3QgX2ZpbHRlclRhc2tzID0gKGFyciwgY29tcGxldGUpID0+IHtcbiAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgIGFyciA9IGFyci5maWx0ZXIoZWxlbSA9PiBlbGVtLmNvbXBsZXRlKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGFyciA9IGFyci5maWx0ZXIoZWxlbSA9PiAhZWxlbS5jb21wbGV0ZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QsIGNhdGVnb3J5KSA9PiB7XG4gICAgLy9hZGQgYSBuZXcgcHJvamVjdCB0byB0b2RvIG9iamVjdCAtLSBqdXN0IGxpa2UgYWRkaW5nIHRhc2tzIHRvIHByb2plY3RzLCBzbyByZWZhY3RvclxuICAgIGlmIChjYXRlZ29yeSBpbiBwcm9qZWN0cykge1xuICAgICAgcHJvamVjdHNbY2F0ZWdvcnldLnB1c2gocHJvamVjdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvamVjdHNbY2F0ZWdvcnldID0gW107XG4gICAgICBwcm9qZWN0c1tjYXRlZ29yeV0ucHVzaChwcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0LCBjYXRlZ29yeSkgPT4ge1xuICAgIC8vcmVtb3ZlIGEgcHJvamVjdFxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHNbY2F0ZWdvcnldLmluZGV4T2YocHJvamVjdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdHNbY2F0ZWdvcnldLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRQcm9qZWN0ID0gKG5hbWUsIGNhdGVnb3J5KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDSEVDSyBNRVwiLCBwcm9qZWN0c1tjYXRlZ29yeV0pO1xuICAgIGNvbnN0IHAgPSBwcm9qZWN0c1tjYXRlZ29yeV0uZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXRUaXRsZSgpID09PSBuYW1lKTtcblxuICAgIHJldHVybiBwWzBdO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFza3MsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGZpbmRQcm9qZWN0XG4gIH1cbn1cblxuLy9uZWVkIGEgZmluZCBwcm9qZWN0IG1ldGhvZCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmF2Q29tcG9uZW50IH0gZnJvbSBcIi4vbmF2LmpzXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmNvbnNvbGUubG9nKFwidXAgYW5kIHJ1bm5pbmchXCIpO1xuXG4vL25lZWQgbmV3IGR1bW15IGRhdGEgdGhhdCByZWZsZWN0cyBjaGFuZ2VzXG5jb25zdCB0b2RvcyA9IFRvZG8oKTtcbi8vUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHRpbWUsIGNhdGVnb3J5KVxuLy9UYXNrID0gKGRlc2NyaXB0aW9uLCBwcm9qZWN0VGl0bGUsIHByaW9yaXR5LCBkYXRlLCB0aW1lLCBjYXRlZ29yeSA9IFwibWlzY1wiKVxuLy9hZGRUYXNrID0gKHRhc2ssIHRhc2tDYXRlZ29yeSlcbi8vYWRkUHJvamVjdCA9IChwcm9qZWN0LCBjYXRlZ29yeSkgXG5cbmNvbnN0IHAxID0gUHJvamVjdChcIlByb2plY3QgT25lXCIsIFwic29tZSBkZXNjcmlwdGlvbi4uLlwiLCBcIjIwMjMtMDctMjBcIiwgXCIxMzowMFwiLCBcIndvcmtcIik7XG5jb25zdCBwMiA9IFByb2plY3QoXCJQcm9qZWN0IFR3b1wiLCBcInNvbWUgZGVzY3JpcHRpb24uLi4uXCIsIFwiMjAyMy0wNy0yMFwiLCBcIjA3OjAwXCIsIFwid29ya1wiKTtcbmNvbnN0IHAzID0gUHJvamVjdChcIlByb2plY3QgVGhyZWVcIiwgXCJzb21lIGRlc2NyaXB0aW9uLi4uXCIsIFwiMjAyMy0wOS0wMVwiLCBcIlwiLCBcIndvcmtcIik7XG5cbmNvbnN0IHRhc2tzQXJncyA9IFtbXCJhIHRoaW5nIHRoYXQgbXVzdCBiZSBkb25lXCIsIFwiUHJvamVjdCBPbmVcIiwgXCJoaWdoXCIsIFwiMjAyMy0wNy0xN1wiLCBcIjEyOjAwXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCJhbm90aGVyIHRoaW5nIHRvIGRvXCIsIFwiUHJvamVjdCBPbmVcIiwgXCJsb3dcIiwgXCIyMDIzLTA3LTE3XCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCJhIHRoaXJkIHRoaW5nXCIsIFwiUHJvamVjdCBUd29cIiwgXCJsb3dcIiwgXCIyMDIzLTA3LTE4XCIsIFwiXCJdXG5dO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJncy5sZW5ndGg7IGkrKykge1xuICBjb25zdCBhcmdzID0gdGFza3NBcmdzW2ldO1xuICBjb25zdCB0ID0gVGFzayguLi5hcmdzKTtcbiAgY29uc3QgcHJvamVjdCA9IGkgPT09IDIgPyBwMiA6IHAxXG4gIHByb2plY3QuYWRkVGFzayh0LCB0LmdldENhdGVnb3J5KCkpO1xufVxudG9kb3MuYWRkUHJvamVjdChwMSwgcDEuZ2V0Q2F0ZWdvcnkoKSk7XG50b2Rvcy5hZGRQcm9qZWN0KHAyLCBwMi5nZXRDYXRlZ29yeSgpKTtcbnRvZG9zLmFkZFByb2plY3QocDMsIHAzLmdldENhdGVnb3J5KCkpO1xuXG5jb25zb2xlLmxvZyh0b2Rvcy5nZXRQcm9qZWN0cygpKTtcbmNvbnNvbGUubG9nKHRvZG9zLmdldFRhc2tzKGZhbHNlLCBmYWxzZSwgZmFsc2UpKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgLy90ZXN0IGRyYXdpbmcgdGhlIG5hdiBiYXJcbiAgY29uc3QgbmF2UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIG5hdkNvbXBvbmVudCh0b2RvcywgbmF2UGFyZW50KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9