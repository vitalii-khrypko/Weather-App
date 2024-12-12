export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // // Завантаження завдань з localStorage
        // this.model.loadTasks();
        //
        // // Встановлення обробників подій
        // this.view.addTaskBtn.addEventListener("click", () => this.addTask());
        // this.view.listContainer.addEventListener("click", e => this.handleListClick(e));
        // document.body.addEventListener("keydown", e => this.handleEnterKey(e));
        //
        // // Початковий рендер
        // this.view.renderTasks(this.model.getTasks());
    }

    // addTask() {
    //     const taskText = this.view.inputBox.value.trim();
    //     if (taskText) {
    //         this.model.addTask(taskText);
    //         this.model.saveTasks(); // Збереження до localStorage
    //         this.view.renderTasks(this.model.getTasks());
    //         this.view.clearInput();
    //     }
    // }
    //
    // handleListClick(event) {
    //     const target = event.target;
    //
    //     if (target.classList.contains("edit")) {
    //         this.editTask(target);
    //     } else if (target.tagName === "LI") {
    //         target.classList.toggle("checked");
    //     } else if (target.tagName === "SPAN") {
    //         this.deleteTask(target);
    //     }
    // }
    //
    // editTask(editButton) {
    //     const li = editButton.parentElement;
    //     const inputField = document.createElement("input");
    //     inputField.type = "text";
    //     inputField.value = li.firstChild.textContent.trim();
    //
    //     const index = Array.from(this.view.listContainer.children).indexOf(li);
    //
    //     li.firstChild.replaceWith(inputField);
    //     inputField.focus();
    //
    //     inputField.addEventListener("blur", () => {
    //         const updatedTask = inputField.value.trim();
    //         this.model.editTask(index, updatedTask);
    //         this.model.saveTasks(); // Збереження до localStorage
    //         this.view.renderTasks(this.model.getTasks());
    //     });
    //
    //     inputField.addEventListener("keydown", e => {
    //         if (e.key === "Enter") {
    //             inputField.blur();
    //         }
    //     });
    // }
    //
    // deleteTask(deleteButton) {
    //     const li = deleteButton.parentElement;
    //     const index = Array.from(this.view.listContainer.children).indexOf(li);
    //     this.model.removeTask(index);
    //     this.model.saveTasks(); // Збереження до localStorage
    //     this.view.renderTasks(this.model.getTasks());
    // }
    //
    // handleEnterKey(event) {
    //     if (event.key === "Enter" && this.view.inputBox.value !== "") {
    //         this.addTask();
    //     }
    // }
}