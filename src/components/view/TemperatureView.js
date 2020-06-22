import TemperatureController from "../controller/TemperatureController.js";

class TemperatureView {
  setNewTeperatutes(temperatures) {
    let temperatureController = new TemperatureController(temperatures)
    let changes_temperatures = temperatureController.changeFormatTemperatureController();

    document.getElementById("number_temperature_1").textContent = changes_temperatures[0];
    document.getElementById("number_temperature_2").textContent = changes_temperatures[1];
    document.getElementById("number_temperature_3").textContent = changes_temperatures[2];
    document.getElementById("number_temperature_4").textContent = changes_temperatures[3];
  }
}

var temperatureView = new TemperatureView()
window.changeFormatTemperature = function() {
  let temperatures = document.querySelectorAll("#number_temperature_1, #number_temperature_2, #number_temperature_3, #number_temperature_4");
  temperatureView.setNewTeperatutes(temperatures)
}
