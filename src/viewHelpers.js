export function orderByDate(objectsWithDate) {
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

export function getCategories(arr) {
  const categories = arr.map(elem => elem.getCategory());
  return [...new Set(categories)].sort();
}

export function sameDay(one, two) { 
  if (!one.getDate() && !two.getDate()){
    return true;
  }
  else if (!one.getDate() || !two.getDate()) {
    return false;
  }
  return one.getDate() === two.getDate() && 
    one.getMonth() === two.getMonth() &&
    one.getFullYear() === two.getFullYear();
}

export function getDivTitle(date) { 
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (!date) {
    return "Unscheduled";
  }
  else if (sameDay(date, today)) {
    return "Today";
  }
  else if (sameDay(date, tomorrow)) {
    return "Tomorrow";
  }
  else {
    return date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  }
}

export function generateTaskItemId(id) {
  return `task_${id}`;
}