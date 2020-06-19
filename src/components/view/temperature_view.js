import {change_format_temperature_controller} from "../controller/temperature_controller.js";

window.change_format_temperature = function() {
  let temperatures = document.querySelectorAll("#number_temperature_1, #number_temperature_2, #number_temperature_3, #number_temperature_4");
  let changes_temperatures = change_format_temperature_controller(temperatures);

  document.getElementById("number_temperature_1").textContent = changes_temperatures[0];
  document.getElementById("number_temperature_2").textContent = changes_temperatures[1];
  document.getElementById("number_temperature_3").textContent = changes_temperatures[2];
  document.getElementById("number_temperature_4").textContent = changes_temperatures[3];
}