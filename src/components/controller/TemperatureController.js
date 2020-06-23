import TemperatureModel from "../model/TemperatureModel.js"

export default class TemperatureController {
    constructor() {

    }

    updateDataTemp(temperatures) {
        console.log(temperatures.length)
        this.numberTemp = [temperatures.length];
        this.numberTemp[0] = Number(temperatures[0].textContent);
        for (let index = 1; index < temperatures.length; index++) {
            this.numberTemp[index] = Number(temperatures[index].textContent.substring(0, temperatures[index].textContent.length - 1));
        }
    }

    changeFormatTemperatureController() {
    
        let temperatureModel = new TemperatureModel(this.numberTemp)
    
        let chbox=document.getElementById('change_format_temperature');
        if (!chbox.checked) {
            this.numberTemp = temperatureModel.convertFahrenheitToCelsius();
        }
        else {
            this.numberTemp = temperatureModel.convertCelsiusToFahrenheit();
        }
        this.numberTemp = temperatureModel.addSymbol(this.numberTemp) 
        return this.numberTemp;
    }
}



// export function changeFormatTemperatureController(temperatures) {
    
//     let test = new TemperatureModel(number_temp)

//     let chbox=document.getElementById('change_format_temperature');
//     if (!chbox.checked) {
//         number_temp = test.convertFahrenheitToCelsius();
//     }
//     else {
//         number_temp = test.convertCelsiusToFahrenheit();
//     }

//     for (let index = 1; index < number_temp.length; index++) {
//         number_temp[index] = convertToTemperature(number_temp[index]);
//     }
//     return number_temp;
// }


    

 