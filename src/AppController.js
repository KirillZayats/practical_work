import LocationModel from "./components/models/LocationModel";
import WeatherModel from "./components/models/WeatherModel";
import LocationController from "./components/controllers/LocationController";
import { controllers as contrNames } from "./constants/constants";

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
  }

  loadInitialData() {
    this.models[contrNames.location]
      .getLocation()
      // .then((coords) => {
      //   return this.models[contrNames.location].(coords);
      // })
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

  getController(name) {
    return this.controllers[name];
  }
}
