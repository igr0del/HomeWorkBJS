const newTask = {
  tasks: [{
    id: 1,
    name: "тест",
    description: "описание",
    order: 0,
  }],
};

const taskManager = {
  tasks: [],

  setTasks(obj) {
    this.tasks = Array.isArray(obj?.tasks) ? [...obj.tasks] : [];
    return this;
  },

  getAll() {
    return this.tasks;
  },

  getById(id) {
    return this.tasks.find(t => t.id === id) || null;
  },

  addTask(task) {
    this.tasks.push({ ...task });
    return this;
  },

  updateTask(id, patch) {
    this.tasks = this.tasks.map(t => (t.id === id ? { ...t, ...patch } : t));
    return this;
  },

  removeTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return this;
  },

  sortByOrder() {
    this.tasks.sort((a, b) => a.order - b.order);
    return this;
  },

  setOrder(id, newOrder) {
    const task = this.getById(id);
    if (!task) return this;

    task.order = newOrder;
    return this;
  },
};

taskManager.setTasks(newTask);

console.log("getAll:", taskManager.getAll());

console.log("getById(1):", taskManager.getById(1));

taskManager.addTask({
  id: 2,
  name: "ещё тест",
  description: "ещё описание",
  order: 5,
});

console.log("after addTask:", taskManager.getAll());

taskManager.updateTask(1, { description: "обновлённое описание", name: "тест-апдейт" });
console.log("after updateTask:", taskManager.getById(1));

taskManager.setOrder(2, 1);
console.log("after setOrder:", taskManager.getAll());

taskManager.sortByOrder();
console.log("after sortByOrder:", taskManager.getAll());

taskManager.removeTask(1);
console.log("after removeTask:", taskManager.getAll());