export class View {
    constructor() {
        this.cityInput = document.getElementById("city");
        this.temp = document.querySelector(".temp");
        this.city = document.querySelector(".city");
        this.country = document.querySelector(".country");
        this.icon = document.querySelector(".weather-icon");
        this.weatherDetails = document.querySelector(".weather-details"); // Місце для динамічних елементів
        this.showBtn = document.getElementById("show-btn");
    }

    renderWeather({ city, country, temp, icon, feels_like, humidity, windSpeed }) {
        // Clearing weather-details before adding new elements
        this.weatherDetails.innerHTML = '';

        this.temp.innerHTML = `${temp}°`;
        this.city.innerHTML = city;
        this.country.innerHTML = `Country: ${country}`;  // Вивести країну

        // Creating new elements for feels_like, humidity, windSpeed
        const feelsLikeElem = this.createWeatherDetail('Feels like', `${feels_like}°`, 'feels_like');
        const humidityElem = this.createWeatherDetail('Humidity', `${humidity}%`, 'humidity');
        const windSpeedElem = this.createWeatherDetail('Wind Speed', `${windSpeed} km/h`, 'windSpeed');

        // Adding new elements in weatherDetails
        this.weatherDetails.appendChild(feelsLikeElem);
        this.weatherDetails.appendChild(humidityElem);
        this.weatherDetails.appendChild(windSpeedElem);

        // Setting URL for weather icon
        this.icon.src = `https://openweathermap.org/img/wn/${icon}.png`;
    }

    createWeatherDetail(label, value, className) {
        const detailElem = document.createElement('h3');
        detailElem.innerHTML = `${label}: ${value}`;
        detailElem.classList.add(className);  // adding class for styling
        return detailElem;
    }

    renderError(message) {
        this.temp.innerHTML = `<span style="color: red;">${message}</span>`;
    }
}
