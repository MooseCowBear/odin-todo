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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



//if todo has project and task imported, shouldn't need it here??

function navComponent(todos, parent) {
  //draws buttons to task views: today, upcoming, anytime, complete
  const navDiv = document.createElement('nav');

  const tasksDiv = document.createElement('div');
  const buttons = ['Today', 'Upcoming', 'Anytime', 'Completed'];

  for (const b of buttons) {
    const btn = document.createElement('button');
    btn.textContent = b;
    btn.id = b.toLowerCase(); //do i actually need this?
    tasksDiv.appendChild(btn);
  }

  navDiv.appendChild(tasksDiv);

  const projectsDiv = document.createElement('div');

  const projects = todos.getProjects();

  for (const cat in projects) {
    const projectDiv = document.createElement('div');
    const title = document.createElement('h3'); //h1 and h2 will be in the main content part
    title.textContent = cat;
    projectDiv.appendChild(title);

    for (const p of projects[cat]) { //THIS WILL PROBABLY CHANGE -- also not in order of date yet
      const projectItem = document.createElement('button');
      projectItem.classList.add("project-item");
      projectItem.textContent = p.getTitle();
      projectDiv.appendChild(projectItem);
    }

    projectsDiv.appendChild(projectDiv);
  }
  navDiv.appendChild(projectsDiv);

  //draws each category of project, with projects from that category listed (in order of date)
  parent.appendChild(navDiv);
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
  objectsWithDate.sort( function(a, b) {
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
  })
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
const Project = (title, description, category, date = null, timeSpecified = false) => {
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

  const getDate = () => {
    return date;
  };

  const setDate = (newDate) => {
    date = newDate;
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

  const hasTime = () => {
    return timeSpecified;
  };

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getCategory,
    getDate,
    setDate, 
    addTask,
    getTasksByCategory,
    removeTask, 
    complete,
    hasTime
  };
};

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
const Task = (description, category = "misc", priority = 0, date = null, timeSpecified = false) => {
  let completed = false;

  //want if time specified to set the date to the end of the day, and same for project

  const getDescription = () => {
    return description;
  };
  
  const setDescription = (newDescription) => {
    description = newDescription;
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

  const getDate = () => {
    return date;
  };

  const setDate = (newDate) => {
    date = newDate;
  };

  const complete = () => {
    return completed;
  };

  const updateStatus = () => {
    completed = !completed;
  };

  const hasTime = () => {
    return timeSpecified;
  };

  return {
    getDescription,
    setDescription,
    getCategory,
    setCategory,
    getPriority,
    setPriority,
    getDate,
    setDate,
    complete,
    updateStatus,
    hasTime
  };
};

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

  const getTasks = (complete = false, start = null, end = null) => {
    /*need to get uncompleted?
     1. tasks for today (particular date)
     2. tasks for upcoming (range of dates)
     3. all tasks (with ones that have no dates/times) being last
    */
   let tasksArr = _getAllTasks();

   if (start && end) {
    //filter by what is between - but need to treat each like
    //start will be end of day today, so upcoming won't include curr day...
    tasksArr = tasksArr.filter(elem => (elem.getDate() > start && elem.getDate() <= end));
   }
   else if (start) {
    //filter by just start, which will be today
    tasksArr = tasksArr.filter(elem => elem.getDate().toDateString() === start.toDateString()); 
   }

   tasksArr = _filterTasks(tasksArr, complete); 

   return tasksArr;
  };

  const _getAllTasks = () => {
    let tasksArr = [];
    for (const cat in projects) {
      tasksArr = tasksArr.concat(projects[cat]);
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
    //want to get outstanding projects (ordered by lowest deadline)
    //should this be by category, or just return the projects object?
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

  return {
    getTasks,
    getProjects,
    addProject,
    removeProject
  }
}

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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



console.log("up and running!");

const todos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)();

(function () {
  //test drawing the nav bar
  const content = document.getElementById('content');

  (0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.navComponent)(todos, content);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9vcmRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3JkZXJCeURhdGUgfSBmcm9tIFwiLi9vcmRlci5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuLy9pZiB0b2RvIGhhcyBwcm9qZWN0IGFuZCB0YXNrIGltcG9ydGVkLCBzaG91bGRuJ3QgbmVlZCBpdCBoZXJlPz9cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdkNvbXBvbmVudCh0b2RvcywgcGFyZW50KSB7XG4gIC8vZHJhd3MgYnV0dG9ucyB0byB0YXNrIHZpZXdzOiB0b2RheSwgdXBjb21pbmcsIGFueXRpbWUsIGNvbXBsZXRlXG4gIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ1dHRvbnMgPSBbJ1RvZGF5JywgJ1VwY29taW5nJywgJ0FueXRpbWUnLCAnQ29tcGxldGVkJ107XG5cbiAgZm9yIChjb25zdCBiIG9mIGJ1dHRvbnMpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBiO1xuICAgIGJ0bi5pZCA9IGIudG9Mb3dlckNhc2UoKTsgLy9kbyBpIGFjdHVhbGx5IG5lZWQgdGhpcz9cbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICB9XG5cbiAgbmF2RGl2LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcblxuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHByb2plY3RzID0gdG9kb3MuZ2V0UHJvamVjdHMoKTtcblxuICBmb3IgKGNvbnN0IGNhdCBpbiBwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7IC8vaDEgYW5kIGgyIHdpbGwgYmUgaW4gdGhlIG1haW4gY29udGVudCBwYXJ0XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXQ7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHJvamVjdHNbY2F0XSkgeyAvL1RISVMgV0lMTCBQUk9CQUJMWSBDSEFOR0UgLS0gYWxzbyBub3QgaW4gb3JkZXIgb2YgZGF0ZSB5ZXRcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuICAgICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwLmdldFRpdGxlKCk7XG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfVxuICBuYXZEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gIC8vZHJhd3MgZWFjaCBjYXRlZ29yeSBvZiBwcm9qZWN0LCB3aXRoIHByb2plY3RzIGZyb20gdGhhdCBjYXRlZ29yeSBsaXN0ZWQgKGluIG9yZGVyIG9mIGRhdGUpXG4gIHBhcmVudC5hcHBlbmRDaGlsZChuYXZEaXYpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBvcmRlckJ5RGF0ZShvYmplY3RzV2l0aERhdGUpIHtcbiAgLy90aGlzIHNob3VsZCB3b3JrIGZvciBib3RoIHRhc2tzIGFuZCBwcm9qZWN0cywgd2hpY2ggaXMgd2hhdCB3ZSB3YW50Li4uXG4gIG9iamVjdHNXaXRoRGF0ZS5zb3J0KCBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKGEuZ2V0RGF0ZSgpICYmIGIuZ2V0RGF0ZSgpKSB7XG4gICAgICBpZiAoYS5nZXREYXRlKCkgPiBiLmdldERhdGUoKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEuZ2V0RGF0ZSgpIDwgYi5nZXREYXRlKCkpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChhLmdldERhdGUoKSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGIuZ2V0RGF0ZSgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KVxufSIsImV4cG9ydCBjb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGRhdGUgPSBudWxsLCB0aW1lU3BlY2lmaWVkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGFza3MgPSB7IG1pc2M6IFtdIH07XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldENhdGVnb3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yeTtcbiAgfTtcblxuICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkYXRlO1xuICB9O1xuXG4gIGNvbnN0IHNldERhdGUgPSAobmV3RGF0ZSkgPT4ge1xuICAgIGRhdGUgPSBuZXdEYXRlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaywgdGFza0NhdGVnb3J5KSA9PiB7XG4gICAgaWYgKHRhc2tDYXRlZ29yeSBpbiB0YXNrcykge1xuICAgICAgdGFza3NbdGFza0NhdGVnb3J5XS5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRhc2tzW3Rhc2tDYXRlZ29yeV0gPSBbXTtcbiAgICAgIHRhc2tzW3Rhc2tDYXRlZ29yeV0ucHVzaCh0YXNrKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3NCeUNhdGVnb3J5ID0gKGNhdCkgPT4ge1xuICAgIHJldHVybiB0YXNrc1tjYXRdO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3QgY2F0IGluIHRhc2tzKSB7XG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3NbY2F0XSkge1xuICAgICAgICBpZiAoIXRhc2suY29tcGxldGUoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBoYXNUaW1lID0gKCkgPT4ge1xuICAgIHJldHVybiB0aW1lU3BlY2lmaWVkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0Q2F0ZWdvcnksXG4gICAgZ2V0RGF0ZSxcbiAgICBzZXREYXRlLCBcbiAgICBhZGRUYXNrLFxuICAgIGdldFRhc2tzQnlDYXRlZ29yeSxcbiAgICByZW1vdmVUYXNrLCBcbiAgICBjb21wbGV0ZSxcbiAgICBoYXNUaW1lXG4gIH07XG59OyIsImV4cG9ydCBjb25zdCBUYXNrID0gKGRlc2NyaXB0aW9uLCBjYXRlZ29yeSA9IFwibWlzY1wiLCBwcmlvcml0eSA9IDAsIGRhdGUgPSBudWxsLCB0aW1lU3BlY2lmaWVkID0gZmFsc2UpID0+IHtcbiAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vd2FudCBpZiB0aW1lIHNwZWNpZmllZCB0byBzZXQgdGhlIGRhdGUgdG8gdGhlIGVuZCBvZiB0aGUgZGF5LCBhbmQgc2FtZSBmb3IgcHJvamVjdFxuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICBjYXRlZ29yeSA9IG5ld0NhdGVnb3J5O1xuICB9O1xuXG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfTtcblxuICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcbiAgICBkYXRlID0gbmV3RGF0ZTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY29tcGxldGVkO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN0YXR1cyA9ICgpID0+IHtcbiAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuICB9O1xuXG4gIGNvbnN0IGhhc1RpbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRpbWVTcGVjaWZpZWQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBnZXRDYXRlZ29yeSxcbiAgICBzZXRDYXRlZ29yeSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBnZXREYXRlLFxuICAgIHNldERhdGUsXG4gICAgY29tcGxldGUsXG4gICAgdXBkYXRlU3RhdHVzLFxuICAgIGhhc1RpbWVcbiAgfTtcbn07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBUb2RvID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IHtcbiAgICB3b3JrOiBbXSxcbiAgICBsaWZlOiBbXVxuICB9XG5cbiAgY29uc3QgZ2V0VGFza3MgPSAoY29tcGxldGUgPSBmYWxzZSwgc3RhcnQgPSBudWxsLCBlbmQgPSBudWxsKSA9PiB7XG4gICAgLypuZWVkIHRvIGdldCB1bmNvbXBsZXRlZD9cbiAgICAgMS4gdGFza3MgZm9yIHRvZGF5IChwYXJ0aWN1bGFyIGRhdGUpXG4gICAgIDIuIHRhc2tzIGZvciB1cGNvbWluZyAocmFuZ2Ugb2YgZGF0ZXMpXG4gICAgIDMuIGFsbCB0YXNrcyAod2l0aCBvbmVzIHRoYXQgaGF2ZSBubyBkYXRlcy90aW1lcykgYmVpbmcgbGFzdFxuICAgICovXG4gICBsZXQgdGFza3NBcnIgPSBfZ2V0QWxsVGFza3MoKTtcblxuICAgaWYgKHN0YXJ0ICYmIGVuZCkge1xuICAgIC8vZmlsdGVyIGJ5IHdoYXQgaXMgYmV0d2VlbiAtIGJ1dCBuZWVkIHRvIHRyZWF0IGVhY2ggbGlrZVxuICAgIC8vc3RhcnQgd2lsbCBiZSBlbmQgb2YgZGF5IHRvZGF5LCBzbyB1cGNvbWluZyB3b24ndCBpbmNsdWRlIGN1cnIgZGF5Li4uXG4gICAgdGFza3NBcnIgPSB0YXNrc0Fyci5maWx0ZXIoZWxlbSA9PiAoZWxlbS5nZXREYXRlKCkgPiBzdGFydCAmJiBlbGVtLmdldERhdGUoKSA8PSBlbmQpKTtcbiAgIH1cbiAgIGVsc2UgaWYgKHN0YXJ0KSB7XG4gICAgLy9maWx0ZXIgYnkganVzdCBzdGFydCwgd2hpY2ggd2lsbCBiZSB0b2RheVxuICAgIHRhc2tzQXJyID0gdGFza3NBcnIuZmlsdGVyKGVsZW0gPT4gZWxlbS5nZXREYXRlKCkudG9EYXRlU3RyaW5nKCkgPT09IHN0YXJ0LnRvRGF0ZVN0cmluZygpKTsgXG4gICB9XG5cbiAgIHRhc2tzQXJyID0gX2ZpbHRlclRhc2tzKHRhc2tzQXJyLCBjb21wbGV0ZSk7IFxuXG4gICByZXR1cm4gdGFza3NBcnI7XG4gIH07XG5cbiAgY29uc3QgX2dldEFsbFRhc2tzID0gKCkgPT4ge1xuICAgIGxldCB0YXNrc0FyciA9IFtdO1xuICAgIGZvciAoY29uc3QgY2F0IGluIHByb2plY3RzKSB7XG4gICAgICB0YXNrc0FyciA9IHRhc2tzQXJyLmNvbmNhdChwcm9qZWN0c1tjYXRdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tzQXJyOyAvL3dvbid0IGJlIGluIG9yZGVyIGV2ZW4gaWYgaGFkIGJlZW5cbiAgfVxuXG4gIGNvbnN0IF9maWx0ZXJUYXNrcyA9IChhcnIsIGNvbXBsZXRlKSA9PiB7XG4gICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICBhcnIgPSBhcnIuZmlsdGVyKGVsZW0gPT4gZWxlbS5jb21wbGV0ZSgpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhcnIgPSBhcnIuZmlsdGVyKGVsZW0gPT4gIWVsZW0uY29tcGxldGUoKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvL3dhbnQgdG8gZ2V0IG91dHN0YW5kaW5nIHByb2plY3RzIChvcmRlcmVkIGJ5IGxvd2VzdCBkZWFkbGluZSlcbiAgICAvL3Nob3VsZCB0aGlzIGJlIGJ5IGNhdGVnb3J5LCBvciBqdXN0IHJldHVybiB0aGUgcHJvamVjdHMgb2JqZWN0P1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QsIGNhdGVnb3J5KSA9PiB7XG4gICAgLy9hZGQgYSBuZXcgcHJvamVjdCB0byB0b2RvIG9iamVjdCAtLSBqdXN0IGxpa2UgYWRkaW5nIHRhc2tzIHRvIHByb2plY3RzLCBzbyByZWZhY3RvclxuICAgIGlmIChjYXRlZ29yeSBpbiBwcm9qZWN0cykge1xuICAgICAgcHJvamVjdHNbY2F0ZWdvcnldLnB1c2gocHJvamVjdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvamVjdHNbY2F0ZWdvcnldID0gW107XG4gICAgICBwcm9qZWN0c1tjYXRlZ29yeV0ucHVzaChwcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0LCBjYXRlZ29yeSkgPT4ge1xuICAgIC8vcmVtb3ZlIGEgcHJvamVjdFxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHNbY2F0ZWdvcnldLmluZGV4T2YocHJvamVjdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdHNbY2F0ZWdvcnldLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGFza3MsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG5hdkNvbXBvbmVudCB9IGZyb20gXCIuL25hdi5qc1wiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuY29uc29sZS5sb2coXCJ1cCBhbmQgcnVubmluZyFcIik7XG5cbmNvbnN0IHRvZG9zID0gVG9kbygpO1xuXG4oZnVuY3Rpb24gKCkge1xuICAvL3Rlc3QgZHJhd2luZyB0aGUgbmF2IGJhclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBuYXZDb21wb25lbnQodG9kb3MsIGNvbnRlbnQpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=