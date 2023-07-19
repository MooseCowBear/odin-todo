export function updateStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}