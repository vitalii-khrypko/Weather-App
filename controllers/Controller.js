export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.showBtn.addEventListener("click", () => this.showWeather());
        this.view.cityInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") this.showWeather();
        });

        // Завантажуємо дані з localStorage під час старту
        this.loadSavedWeather();
    }

    async showWeather() {
        const cityName = this.view.cityInput.value;
        if (!cityName) {
            alert("Please enter a city name!");
            return;
        }

        try {
            const weatherData = await this.model.fetchWeather(cityName);
            // Зберігаємо дані в localStorage
            localStorage.setItem("lastCity", cityName);
            localStorage.setItem("weatherData", JSON.stringify(weatherData));

            this.view.renderWeather(weatherData);
        } catch (error) {
            this.view.renderError("Failed to fetch weather data. Please try again.");
        }
    }

    loadSavedWeather() {
        const lastCity = localStorage.getItem("lastCity");
        const weatherData = localStorage.getItem("weatherData");

        if (lastCity && weatherData) {
            // Якщо є збережені дані, відображаємо їх
            this.view.cityInput.value = lastCity;
            this.view.renderWeather(JSON.parse(weatherData));
        }
    }
}
