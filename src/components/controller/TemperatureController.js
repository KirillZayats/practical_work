import {convertCelsiusToFahrenheit, convertFahrenheitToCelsius} from "../model/TemperatureModel.js"

export function changeFormatTemperatureController(temperatures) {
    let number_temp = [temperatures.length];
    number_temp[0] = Number(temperatures[0].textContent);
    for (let index = 1; index < temperatures.length; index++) {
        number_temp[index] = convertToNumber(temperatures[index].textContent);
    }
    let chbox=document.getElementById('change_format_temperature');
    if (!chbox.checked) {
        number_temp = convertFahrenheitToCelsius(number_temp);
    }
    else {
        number_temp = convertCelsiusToFahrenheit(number_temp);
    }

    for (let index = 1; index < number_temp.length; index++) {
        number_temp[index] = convertToTemperature(number_temp[index]);
    }
    return number_temp;
}

function convertToNumber(temperature) {
    return Number(temperature.substring(0, temperature.length - 1));
}

function convertToTemperature(number) {
    return number + "°";
}


    

 