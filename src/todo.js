import { Task } from "./task.js";
import { Project } from "./project.js";

export const Todo = () => {
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