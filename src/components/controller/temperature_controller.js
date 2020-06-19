import {convert_celsius_to_fahrenheit, convert_fahrenheit_to_celsius} from "../model/temperature_model.js"

export function change_format_temperature_controller(temperatures) {
    let number_temp = [temperatures.length];
    number_temp[0] = Number(temperatures[0].textContent);
    for (let index = 1; index < temperatures.length; index++) {
        number_temp[index] = convert_to_number(temperatures[index].textContent);
    }
    let chbox=document.getElementById('change_format_temperature');
    if (!chbox.checked) {
        number_temp = convert_fahrenheit_to_celsius(number_temp);
    }
    else {
        number_temp = convert_celsius_to_fahrenheit(number_temp);
    }

    for (let index = 1; index < number_temp.length; index++) {
        number_temp[index] = convert_to_temperature(number_temp[index]);
    }
    return number_temp;
}

function convert_to_number(temperature) {
    return Number(temperature.substring(0, temperature.length - 1));
}

function convert_to_temperature(number) {
    return number + "°";
}


    

 