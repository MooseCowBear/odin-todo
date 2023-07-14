export const Todo = () => {
  const projects = {
    work: [],
    life: []
  }

  const getTasks = (start = null, end = null) => {
    /*need to get uncompleted, (ordered by lowest datetime first)
     1. tasks for today (particular date)
     2. tasks for upcoming (range of dates)
     3. all tasks (with ones that have no dates/times) being last
    */
   let tasksArr = _getAllTasks();

   if (start && end) {
    //filter by what is between - but need to treat each like
    tasksArr = tasksArr.filter(elem => (elem.date >= start && elem.date <= end));
   }
   else if (start) {
    //filter by just start, which will be today
    tasksArr = tasksArr.filter(elem => elem.date.getTime() === start.getTime()); 
   }
   return tasksArr;
  };

  const _getAllTasks = () => {
    let tasksArr = [];
    for (const cat in projects) {
      tasksArr = tasksArr.concat(projects[cat]);
    }
    return tasksArr; //won't be in order even if had been
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

//this will probably be used by the view controllers so will move
function orderByDate(objectsWithDate) {
  //this should work for both tasks and projects, which is what we want...
  objectsWithDate.sort( function(a, b) {
    if (a.date && b.date) {
      if (a.date > b.date) {
        return 1;
      }
      else if (a.date < b.date) {
        return -1;
      }
      else {
        return 0;
      }
    }
    else if (a.date) {
      return 1;
    }
    else if (b.date) {
      return -1;
    }
    else {
      return 0;
    }
  })
}