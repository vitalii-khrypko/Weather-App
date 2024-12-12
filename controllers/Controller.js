export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.showBtn.addEventListener("click", () => this.showData());

    }

    getData(weather) {
        this.view.showData((weather) => {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.view.input.value}&appid=3d3ebf6246c40a1fef67004a8905fa30`;
            fetch(url)
                .then(response => response.json())
                .then(json => {

                });
        });
    }
}