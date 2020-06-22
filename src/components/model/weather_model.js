
export default function getDataWeather(lan, lon){
  getDataWeatherNow(lan, lon)
  getDataWeatherNextDays(lan, lon)
};

function getDataWeatherNow(lan, lon) {
  fetch(`https://api.weatherbit.io/v2.0/current?&lat=${lan}&lon=${lon}&key=5f23c0c2ffbe462eb83bc8acedf28953`)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let nowDaySecond = Date.now();
    var nowDay = new Date(nowDaySecond);
    nowDay.hour = 12;
    console.log(typeof nowDay)
    var optionsDayMonth = {
      day: 'numeric',
    };
    var optionsNameMonth = {
      month: 'long',
    };
    var optionsNowTime = {
      hour: 'numeric',
      minute: 'numeric',
    };

    document.getElementById("day_month").innerHTML = nowDay.toLocaleString("en", optionsDayMonth)
    document.getElementById("name_month").innerHTML = nowDay.toLocaleString("en", optionsNameMonth)
    document.getElementById("time_now").innerHTML = nowDay.toLocaleString("ru", optionsNowTime)
    console.log(json.data[0]);

     document.getElementById("day_week_now").innerHTML = getDayWeekNow(new Date(json.data[0].ob_time).getDay(), "En")
    document.getElementById("description_weather").innerHTML = json.data[0].weather.description
    document.getElementById("number_temperature_1").innerHTML = json.data[0].temp.toFixed(0)
    document.getElementById("temp_feels_like").innerHTML = "Feels like: " + json.data[0].app_temp.toFixed(0) + "°"
    document.getElementById("wind_speed").innerHTML = "Wind: " + json.data[0].wind_spd.toFixed(1) + "m/s"
    document.getElementById("humidity").innerHTML = "Humidity: " + json.data[0].rh + "%"

  });
}

function getDataWeatherNextDays(lan, lon) {
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lan}&lon=${lon}&key=5f23c0c2ffbe462eb83bc8acedf28953&days=4`)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json.data);
    document.getElementById("day_week_2").innerHTML = getDayWeek(new Date(json.data[1].valid_date).getDay(), "En")
    document.getElementById("day_week_3").innerHTML = getDayWeek(new Date(json.data[2].valid_date).getDay(), "En")
    document.getElementById("day_week_4").innerHTML = getDayWeek(new Date(json.data[3].valid_date).getDay(), "En")
    document.getElementById("number_temperature_2").innerHTML = ((json.data[1].max_temp + json.data[1].min_temp) / 2).toFixed(0) + "°"
    document.getElementById("number_temperature_3").innerHTML = ((json.data[2].max_temp + json.data[2].min_temp) / 2).toFixed(0) + "°"
    document.getElementById("number_temperature_4").innerHTML = ((json.data[3].max_temp + json.data[3].min_temp) / 2).toFixed(0) + "°"

  });
}

function getDayWeekNow(numberDate, language) {
  let daysRu = ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'];
  let daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let daysBu = ['Няд', 'Пнд', 'Аут', 'Сер', 'Чцв', 'Пят', 'Суб']
  if("En" == language) {
    return daysEn[numberDate]
  }
  if("Ru" == language) {
    return daysRu[numberDate]
  }
  if("Bu" == language) {
    return daysBu[numberDate]
  }
}

function getDayWeek(numberDate, language) {
  let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let daysBu = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота']
  if("En" == language) {
    return daysEn[numberDate]
  }
  if("Ru" == language) {
    return daysRu[numberDate]
  }
  if("Bu" == language) {
    return daysBu[numberDate]
  }
}



