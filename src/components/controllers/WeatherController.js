
export default class WeatherController {
    constructor(model) {
        this.model = model
    }

    // updateDataTempNextDays(temperaturesNextDays) {
    //     let numberTemp = [temperatures.length];
    //     console.log(temperatures)
    //     numberTemp[0] = Number(temperatures[0]);
    //     console.log(numberTemp)
    //     console.log("numberTemp")

    //     for (let index = 1; index < temperatures.length; index++) {
    //         numberTemp[index] = Number(temperatures[index].substring(0, temperatures[index].length - 1));
    //     }
    //     return numberTemp
    // }

    updateDataTempNextDays(temperaturesNextDays) {
        let numberTemp = [temperaturesNextDays.length]
        for (let index = 0; index < temperaturesNextDays.length; index++) {
            numberTemp[index] = Number(temperaturesNextDays[index].substring(0, temperaturesNextDays[index].length - 1));
        }
        return numberTemp
    }

    changeFormatTemperatureNowController(temperaturesNow, changeFormatTemperature) {
        let numberTemp
        if (!changeFormatTemperature.checked) {
            numberTemp = this.model.convertNumberFahrenheitToCelsius(temperaturesNow);
        }
        else {
            numberTemp = this.model.convertNumberCelsiusToFahrenheit(temperaturesNow);
        }
        return numberTemp;
    }

    changeFormatTemperatureNextDaysController(temperaturesNextDays, changeFormatTemperature) {
        let numberTemp = this.updateDataTempNextDays(temperaturesNextDays)  
        if (!changeFormatTemperature.checked) {
            numberTemp = this.model.convertNumbersFahrenheitToCelsius(numberTemp);
        }
        else {
            numberTemp = this.model.convertNumbersCelsiusToFahrenheit(numberTemp);
        }
        numberTemp = this.model.addSymbol(numberTemp);

        return numberTemp;
    }

}