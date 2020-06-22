console.log("load_temp_model")


export default class TemperatureModel {
  constructor(numbersTemperature) {
    this.numbersTemperature = numbersTemperature
  }

  convertCelsiusToFahrenheit() {
    let convertNumbers = []
    for (let index = 0; index < this.numbersTemperature.length; index++) {
      convertNumbers[index] = (this.numbersTemperature[index] * 9 / 5 + 32).toFixed(0);
    }
  
    return convertNumbers;
  }

  convertFahrenheitToCelsius() {
    let convertNumbers = []
    for (let index = 0; index < this.numbersTemperature.length; index++) {
      convertNumbers[index] = ((this.numbersTemperature[index] - 32) * 5 / 9).toFixed(0);
    }
    return convertNumbers;
  }
}

// function convertCelsiusToFahrenheit(number_temp) {
//   let test = []
//   for (let index = 0; index < number_temp.length; index++) {
//     number_temp[index] = (number_temp[index] * 9 / 5 + 32).toFixed(0);
//   }

//   return number_temp;
// }

// function convertFahrenheitToCelsius(number_temp) {
//   for (let index = 0; index < number_temp.length; index++) {
//     number_temp[index] = ((number_temp[index] - 32) * 5 / 9).toFixed(0);
//   }
//   return number_temp;
// }