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
}