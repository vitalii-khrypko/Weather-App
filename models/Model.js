export class Model {
    constructor(weather) {
        this.city;
        this.temp;
    }

    get city() {
        return this.city = weather.city;
    }

    get temp() {
        return this.temp = weather.temp;
    }

    // loadTasks() {
    //     const tasksFromStorage = localStorage.getItem("tasks");
    //     this.tasks = tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
    // }
    //
    // saveTasks() {
    //     localStorage.setItem("tasks", JSON.stringify(this.tasks));
    // }
    //
    // getTasks() {
    //     return this.tasks;
    // }
    //
    // addTask(task) {
    //     this.tasks.push(task);
    // }
    //
    // editTask(index, newTask) {
    //     if (index >= 0 && index < this.tasks.length) {
    //         this.tasks[index] = newTask;
    //     }
    // }
    //
    // removeTask(index) {
    //     if (index >= 0 && index < this.tasks.length) {
    //         this.tasks.splice(index, 1);
    //     }
    // }
}