function addTask(list, title) {
  const newTask = {
    id: list.length,
    title: title,
    done: false
  };
  return [...list, newTask];
}

function toggleTask(list, id) {
  return list.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}

function removeTask(list, id) {
  return list.filter(task => task.id !== id);
}

function stats(list) {
  const total = list.length;
  const done = list.filter(task => task.done).length;
  const active = total - done;
  return { total, done, active };
}



// Пример использования

let tasks = [];

tasks = addTask(tasks, "Сделать английский");
tasks = addTask(tasks, "Купить хлеб");
tasks = addTask(tasks, "Полить цветы");
console.log(tasks);

tasks = toggleTask(tasks, tasks[0].id);
console.log(tasks);

tasks = removeTask(tasks, tasks[2].id);
console.log(tasks);

console.log(stats(tasks));