import Observer from "./observers/Observer";
import LocationView from "./components/views/LocationView";
import WeatherView from "./components/views/WeatherView";
import AppController from "./AppController";
import { controllers as contrNames } from "./constants/constants";

export default class App {
  constructor(parentDom) {
    this.parentDom = parentDom;
    this.observer = new Observer();
    this.controller = new AppController(this.observer);
    this.render();
  }

  render() {

    this.location = new LocationView({
      parentDom: this.parentDom,
      observer: this.observer,
      controller: this.controller.getController(contrNames.location),
    });
    this.weather = new WeatherView({
      parentDom: this.parentDom,
      observer: this.observer,
      controller: this.controller.getController(contrNames.weather),
    });
    this.controller.loadInitialData();
  };

  loadInitialData() {
    console.log("EEE")
    this.models[contrNames.location]
    .updateLocation()
    
    .then((coords) => {
        console.log("coords");
      return this.models[contrNames.weather].updateWeather(coords);
    })
    .then((weather) => {
      console.log("weather");
    })
    .catch((err) => {
        console.error(err);
    })
  }

  changeLanguage(headerBlock, weatherBlock, locationBlock) {
    this.location.getValueMapLanguage(headerBlock, locationBlock)
    this.weather.getValueMapLanguage(weatherBlock)
  }
}
