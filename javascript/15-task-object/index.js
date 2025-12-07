const ToDoList = {
  tasks: [],

  // Добавить задачу
  addTask(title, priority) {
    if (!title) {
      throw new Error('Title is required to add a task.');
    }

    if (priority == null) { // позволяет использовать 0, если вдруг захочешь
      throw new Error('Priority is required to add a task.');
    }

    const id = Date.now().toString();
    const newTask = { title, id, priority };

    this.tasks.push(newTask);
    return newTask; // было return task (переменной нет)
  },

  // Удалить задачу по id
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  // Синоним, чтобы твой пример внизу тоже работал
  removeTask(id) {
    this.deleteTask(id);
  },

  // Обновить имя или приоритет по id
  updateTask(id, updatedProperties = {}) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      throw new Error('Task not found.');
    }

    const { title, priority } = updatedProperties;

    if (title !== undefined) {
      task.title = title;
    }

    if (priority !== undefined) {
      task.priority = priority;
    }

    return task; // полезнее вернуть обновлённую задачу, а не true
  },

  // Отсортировать по приоритету
  sortByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};

// Пример использования
ToDoList.addTask("Помыть посуду", 1);
ToDoList.addTask("Вынести мусор", 3);
ToDoList.addTask("Сделать уроки", 2);

console.log("До сортировки:", ToDoList.tasks);

ToDoList.sortByPriority();
console.log("После сортировки:", ToDoList.tasks);

ToDoList.updateTask(ToDoList.tasks[0].id, { priority: 5 });
console.log("После обновления:", ToDoList.tasks);

ToDoList.removeTask(ToDoList.tasks[0].id);
console.log("После удаления:", ToDoList.tasks);