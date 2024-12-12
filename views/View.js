export class View {
    constructor() {
        this.cityInput = document.getElementById("city");
        this.tempPar = document.getElementById("temp");
        this.showBtn = document.getElementById("show-btn");
    }

    showData(weather) {
        this.cityInput.innerHTML = "";
        this.tempPar.innerHTML = "";
        weather.forEach(index => {
            // const taskElement = this.createTaskElement(task);
            // this.listContainer.appendChild(taskElement);
        });
    }
}