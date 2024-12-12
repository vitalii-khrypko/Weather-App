export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.showBtn.addEventListener("click", () => this.showWeather());
    }

    async showWeather() {
        const cityName = this.view.cityInput.value;
        if (!cityName) {
            alert("Please enter a city name!");
            return;
        }

        try {
            const weatherData = await this.model.fetchWeather(cityName);
            this.view.renderWeather(weatherData);
        } catch (error) {
            this.view.renderError("Failed to fetch weather data. Please try again.");
        }
    }
}
