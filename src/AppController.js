import LocationModel from "./components/models/LocationModel";
import WeatherModel from "./components/models/WeatherModel";
import LocationController from "./components/controllers/LocationController";
import { controllers as contrNames } from "./constants/constants";
import WeatherController from "./components/controllers/WeatherController";

export default class AppController {
  constructor(observer) {
    this.observer = observer;
    this.models = {};
    this.models[contrNames.location] = new LocationModel({
      observer: this.observer,
    });
    this.models[contrNames.weather] = new WeatherModel({
      observer: this.observer,
    });
    this.controllers = {};
    this.controllers[contrNames.location] = new LocationController(
      this.models[contrNames.location]
    );
    this.controllers[contrNames.weather] = new WeatherController(
      this.models[contrNames.weather]
    );
  }

  loadInitialData() {
    this.models[contrNames.location]
      .getLocation()
      .then((coords) => {
        this.models[contrNames.weather].updateWeatherNow(coords);
        return coords
      })
      .then((coords) => {
        this.models[contrNames.weather].updateWeatherNextDays(coords);
      })
      .catch((err) => {
        console.error(err);
      });

  }

  loadDataByCity(searchBox, message) {

    this.models[contrNames.location]
      .getLocationByNameCity(searchBox, message)
      .then((coords) => {
        if (typeof(coords) == "string") {
          let message = coords
          this.models[contrNames.location].getMessage(message)
          throw message;
        }
                document.body.classList.remove('loaded');

        this.models[contrNames.weather].updateWeatherNow(coords);
        return coords
      })
      .then((coords) => {
        this.models[contrNames.weather].updateWeatherNextDays(coords);
      })
      .catch((err) => {
        console.error(err);
      });

  }

  getController(name) {
    return this.controllers[name];
  }
}
