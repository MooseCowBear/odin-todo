import { Task } from "./task.js";
import { Project } from "./project.js";

// export const Todo = () => {
//   const projects = {
//     work: [],
//     life: []
//   }

//   const getTasks = (wantToday, wantUpcoming, complete) => {
//    let tasksArr = _getAllTasks();
//    let today = new Date(); //want start of day
//    today.setHours(0,0,0,0); 

//    if (wantUpcoming) {
//     tasksArr = tasksArr.filter(elem => (elem.getDate() !== null && elem.getDate() >= today));
//    }
//    else if (wantToday) {
//     tasksArr = tasksArr.filter(elem => elem.getDate() !== null && elem.getDate().toDateString() === today.toDateString()); 
//    }

//    tasksArr = _filterTasks(tasksArr, complete); 

//    return tasksArr;
//   };

//   const _getAllTasks = () => {
//     let tasksArr = [];
//     for (const cat in projects) {
//       for (const p of projects[cat]) {
//         const projectTasks = p.getTasks();
//         for (const taskCat in projectTasks) {
//           tasksArr = tasksArr.concat(projectTasks[taskCat]);
//         }
//       }
//     }
//     return tasksArr; //won't be in order even if had been
//   }

//   const _filterTasks = (arr, complete) => {
//     if (complete) {
//       arr = arr.filter(elem => elem.complete());
//     }
//     else {
//       arr = arr.filter(elem => !elem.complete());
//     }
//     return arr;
//   }

//   const getProjects = () => {
//     return projects;
//   };

//   const addProject = (project, category) => {
//     //add a new project to todo object -- just like adding tasks to projects, so refactor
//     if (category in projects) {
//       projects[category].push(project);
//     }
//     else {
//       projects[category] = [];
//       projects[category].push(project);
//     }
//   };

//   const removeProject = (project, category) => {
//     //remove a project
//     const index = projects[category].indexOf(project);
//     if (index !== -1) {
//       projects[category].splice(index, 1);
//     }
//   };

//   const findProject = (name, category) => {
//     const p = projects[category].filter(elem => elem.getTitle() === name);
//     return p[0];
//   };

//   return {
//     getTasks,
//     getProjects,
//     addProject,
//     removeProject,
//     findProject
//   }
// }

const Todo = () => {
  const projects = [];
  const tasks = [];

  let projectIdCounter = 0;
  let taskIdCounter = 0;

  const getProjectCategories = () => {
    const categories = projects.map(elem => elem.getCategory());
    return [...new Set(categories)].sort();
  };

  const _getProjectById = (id) => {
    const p = projects.filter(elem => elem.getId() === id);
    if (p.length === 0) return null;
    return p[0];
  };

  const _getTaskById = (id) => {
    const t = tasks.filter(elem => elem.getId() === id);
    if (t.length === 0) return null;
    return t[0];
  };

  const createProject = (title, description, date, time, category) => {
    const p = Project(projectIdCounter, title, description, date, time, category);
    projects.push(p);
    projectIdCounter++;
  };

  const createTask = (description, projectId, priority, date, time, category) => {
    const t = Task(taskIdCounter, description, projectId, priority, date, time, category);
    tasks.push(t);
    taskIdCounter++;
  };

  const deleteProject = (id) => {
    projects = projects.filter(elem => elem.getId() !== id);
    tasks = tasks.filter(elem => elem.getProjectId(id) !== id);
  };

  const deleteTask = (id) => {
    tasks = tasks.filter(elem => elem.getId(id) === id)
  };

  const updateProject = (id, title, description, date, time, category) => {
    const project = _getProjectById(id);
    project.setTitle(title);
    project.setDescription(description);
    project.setDate(date);
    project.setTime(time);
    project.setCategory(category);
  };

  const updateTask = (id, description, priority, date, time, category) => {
    const task = _getTaskById(id);
    task.setDescription(description);
    task.setPriority(priority);
    task.setDate(date);
    task.setTime(time);
    task.setCategory(category);
  };

  const getProjects = () => {
    return projects;
  };

  const getTasks = () => {
    return tasks;
  };

  const getTasksByProjectId = (id) => {
    return tasks.filter(elem => elem.getProjectId() === id);
  };

  return {
    getProjectCategories,
    createProject,
    createTask,
    deleteProject,
    deleteTask,
    updateProject,
    updateTask,
    getProjects,
    getTasks,
    getTasksByProjectId
  };
}