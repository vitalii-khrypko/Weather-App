export class Model {
    constructor() {
        this.city = "";
        this.country = "";
        this.temp = null;
        this.icon = null;
        this.feels_like = null;
        this.humidity = null;
        this.windSpeed = null;
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
            this.country = data.sys.country;
            this.icon = data.weather[0].icon; // correct access to icon
            this.temp = Math.round(data.main.temp);
            this.feels_like = Math.round(data.main.feels_like);
            this.humidity = Math.round(data.main.humidity);
            this.windSpeed = Math.round(data.wind.speed);
            return {
                city: this.city,
                country: this.country,
                temp: this.temp,
                icon: this.icon,
                feels_like: this.feels_like,
                humidity: this.humidity,
                windSpeed: this.windSpeed,
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
