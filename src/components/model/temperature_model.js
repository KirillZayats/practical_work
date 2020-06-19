console.log("load_temp_model")

export {convertCelsiusToFahrenheit, convertFahrenheitToCelsius};

function convertCelsiusToFahrenheit(number_temp) {
  let test = []
  for (let index = 0; index < number_temp.length; index++) {
    number_temp[index] = (number_temp[index] * 9 / 5 + 32).toFixed(0);
  }

  return number_temp;
}

function convertFahrenheitToCelsius(number_temp) {
  for (let index = 0; index < number_temp.length; index++) {
    number_temp[index] = ((number_temp[index] - 32) * 5 / 9).toFixed(0);
  }
  return number_temp;
}