import TemperatureController from "../controller/TemperatureController.js";

export default class TemperatureView {
  constructor(temperatures) {
    this.temperatures = temperatures
  } 

  handleClick() {
    let temperatureController = new TemperatureController(this.temperatures)
    this.changes_temperatures = temperatureController.changeFormatTemperatureController();
    document.getElementById("number_temperature_1").textContent = this.changes_temperatures[0];
    document.getElementById("number_temperature_2").textContent = this.changes_temperatures[1];
    document.getElementById("number_temperature_3").textContent = this.changes_temperatures[2];
    document.getElementById("number_temperature_4").textContent = this.changes_temperatures[3];
  }

  render() {
    document.getElementById("change_format_temperature").addEventListener("click", this.handleClick)
  }
}

// var temperatureView = new TemperatureView()
// window.changeFormatTemperature = function() {
//   let temperatures = document.querySelectorAll("#number_temperature_1, #number_temperature_2, #number_temperature_3, #number_temperature_4");
//   temperatureView.setNewTeperatutes(temperatures)
// }
