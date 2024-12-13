export class Model {
    constructor() {
        this.city = "";
        this.temp = null;
        this.icon = null;
    }

    async fetchWeather(cityName) {
        const apiKey = "3d3ebf6246c40a1fef67004a8905fa30";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            this.city = data.name;
            this.icon = data.weather[0].icon; // Виправлення доступу до іконки
            this.temp = Math.round(data.main.temp);
            return { city: this.city, temp: this.temp, icon: this.icon };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
