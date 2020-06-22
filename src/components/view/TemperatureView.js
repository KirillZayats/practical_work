import {changeFormatTemperatureController} from "../controller/TemperatureController.js";

window.changeFormatTemperature = function() {
  let temperatures = document.querySelectorAll("#number_temperature_1, #number_temperature_2, #number_temperature_3, #number_temperature_4");
  let changes_temperatures = changeFormatTemperatureController(temperatures);

  document.getElementById("number_temperature_1").textContent = changes_temperatures[0];
  document.getElementById("number_temperature_2").textContent = changes_temperatures[1];
  document.getElementById("number_temperature_3").textContent = changes_temperatures[2];
  document.getElementById("number_temperature_4").textContent = changes_temperatures[3];
}