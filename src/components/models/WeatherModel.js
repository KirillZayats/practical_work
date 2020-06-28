import { events } from "../../constants/constants";
import Observer from "../../observers/Observer";

export default class WeatherModel {
  /**
   * 
   * @param {Object} params
   * @param {Observer} params.observer 
   */
  constructor({ observer }) {
    this.observer = observer;
  }

  updateWeatherNextDays = async (coords) => {
    console.log(coords)
    console.log("RRRR")

    let lat = coords.latitude
    let lon = coords.longitude
    console.log(lat)
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=5f23c0c2ffbe462eb83bc8acedf28953&days=4`);
    console.log((await response).status)
    if(!response.ok) {
      throw new Error('failed to get weather');
    }
    const data = await response.json();
    // const data = { overcast : "sunny"};
    this.observer.broadcast(events.weatherUpdatedNextDays, data);
    return data;
  }


  updateWeatherNow = async (coords) => {
    /* do requset here */
    let lat = coords.latitude
    let lon = coords.longitude
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lon}&key=5f23c0c2ffbe462eb83bc8acedf28953`);
    if(!response.ok) {
      console.log("QWE11111")

        throw new Error('failed to get weather');
    }
    const data = await response.json();
    // const data = { overcast : "sunny"};
    this.observer.broadcast(events.weatherUpdatedNow, data);
    return data;
  };

}
