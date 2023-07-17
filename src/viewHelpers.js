export function orderByDate(objectsWithDate) {
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

export function getCategories(arr) {
  const categories = arr.map(elem => elem.getCategory());
  return [...new Set(categories)].sort();
}