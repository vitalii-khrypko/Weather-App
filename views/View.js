export class View {
    constructor() {
        this.cityInput = document.getElementById("city");
        this.temp = document.querySelector(".temp");
        this.city = document.querySelector(".city");
        this.icon = document.querySelector(".weather-icon");
        this.showBtn = document.getElementById("show-btn");
    }

    renderWeather({ city, temp, icon }) {
        this.temp.innerHTML = `${temp}°`;
        this.city.innerHTML = city;
        // Встановлюємо URL для іконки погоди
        this.icon.src = `https://openweathermap.org/img/wn/${icon}.png`;
    }

    renderError(message) {
        this.temp.innerHTML = `<span style="color: red;">${message}</span>`;
    }
}
