const ToDolist = {
	tasks: [],

	addTask(title, priority) {
		if (!title || !priority) {
			throw new Error('Title and priority are required to add a task.');
		}

		const id = Date.now().toString();
		const newTask = {
			title,
			id,
			priority
		}
		
		this.tasks.push(newTask);
		return task;
	},

	deleteTask(id) {
		this.tasks = this.tasks.filter(task => task.id !== id);
	}, 

	updateTask(id, updatedProperties) {
		const task = this.tasks.find(task => task.id === id);
		if (!task) {
			throw new Error('Task not found.');
		}

		if (updatedProperties.title !== undefined) {
			task.title = updatedProperties.title;
		}

		if (updatedProperties.priority !== undefined) {
			task.priority = updatedProperties.priority;
		}

		return true;
	},

	sortByPriority() {
		this.tasks.sort((a, b) => a.priority - b.priority);
	}
};

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