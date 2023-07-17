import { Task } from "./task.js";
import { Project } from "./project.js";

export const Todo = () => {
  const projects = {
    work: [],
    life: []
  }

  const getTasks = (wantToday, wantUpcoming, complete) => {
   let tasksArr = _getAllTasks();
   let today = new Date(); //want start of day
   today.setHours(0,0,0,0); 

   if (wantUpcoming) {
    tasksArr = tasksArr.filter(elem => (elem.getDate() !== null && elem.getDate() >= today));
   }
   else if (wantToday) {
    tasksArr = tasksArr.filter(elem => elem.getDate() !== null && elem.getDate().toDateString() === today.toDateString()); 
   }

   tasksArr = _filterTasks(tasksArr, complete); 

   return tasksArr;
  };

  const _getAllTasks = () => {
    let tasksArr = [];
    for (const cat in projects) {
      for (const p of projects[cat]) {
        const projectTasks = p.getTasks();
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