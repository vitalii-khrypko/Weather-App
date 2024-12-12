export class View {
    constructor() {
        this.cityInput = document.getElementById("city");
        this.tempPar = document.getElementById("temp");
        this.showBtn = document.getElementById("show-btn");

        this.cityInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.showBtn.click();
            }
        });
    }

    renderWeather({ city, temp }) {
        this.tempPar.innerHTML = `The temperature in ${city} is ${temp}°C.`;
    }

    renderError(message) {
        this.tempPar.innerHTML = `<span style="color: red;">${message}</span>`;
    }
}
