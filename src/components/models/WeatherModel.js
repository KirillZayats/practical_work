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

    let lat = coords.lat
    let lon = coords.lon
    console.log(lat)
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=5f23c0c2ffbe462eb83bc8acedf28953&days=4`);
    console.log((await response).status)
    if(!response.ok) {
      throw new Error('failed to get weather');
    }
    const data = await response.json();
    // const data = { overcast : "sunny"};
    this.observer.broadcast(events.weatherLoadNextDays, data);
    return data;
  }


  updateWeatherNow = async (coords) => {
    /* do requset here */
    let lat = coords.lat
    let lon = coords.lon
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lon}&key=5f23c0c2ffbe462eb83bc8acedf28953`);
    if(!response.ok) {
        throw new Error('failed to get weather');
    }
    const data = await response.json();
    // const data = { overcast : "sunny"};
    this.observer.broadcast(events.weatherLoadNow, data);
    return data;
  };

  convertNumbersCelsiusToFahrenheit(numbersTemperature) {


    let convertNumbers = []
    for (let index = 0; index < numbersTemperature.length; index++) {
      console.log(numbersTemperature[index])
      convertNumbers[index] = this.convertNumberCelsiusToFahrenheit(numbersTemperature[index])
      console.log(convertNumbers[index])
    }
    return convertNumbers;
  }

  convertNumbersFahrenheitToCelsius(numbersTemperature) {
    console.log(numbersTemperature)
    console.log("numbersTemperature")
    let convertNumbers = []
    for (let index = 0; index < numbersTemperature.length; index++) {
      convertNumbers[index] = this.convertNumberFahrenheitToCelsius(numbersTemperature[index])
    }
    
    return convertNumbers;
  }

  addSymbol(convertNumbers) {
    for (let index = 0; index < convertNumbers.length; index++) {
      convertNumbers[index] = convertNumbers[index] + "°";
    }
    return convertNumbers
  }

  convertNumberCelsiusToFahrenheit(numberTemperature) {
    return (numberTemperature * 9 / 5 + 32).toFixed(0);
  }

  convertNumberFahrenheitToCelsius(numberTemperature) {
    return ((numberTemperature - 32) * 5 / 9).toFixed(0); 
  }

}
