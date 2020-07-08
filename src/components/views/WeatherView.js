import {events, selectors} from "../../constants/constants";
import {weatherMap} from "../../mapWeather"

export default class WeatherView {
    constructor({parentDom, controller, observer}) {
        this.parentDom = parentDom;
        this.observer = observer;
        this.controller = controller;
        this.observer.subscribe(events.weatherLoadNow, this.updateValuesNow);
        this.observer.subscribe(events.weatherLoadNextDays, this.updateValuesNextDays);

        this.render();
    }

    /**
     * @param {Object} coords
     * @param {number} coords.latitude
     * @param {number} coords.longitude
     */
    updateValuesNow = (forecast) => {
      let nowDaySecond = Date.now();
      var nowDay = new Date(nowDaySecond);
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
      
      this.forecast.dayMonth.innerText = nowDay.toLocaleString("en", optionsDayMonth)
      this.forecast.nameMonth.innerText = nowDay.toLocaleString("en", optionsNameMonth)
      this.forecast.timeNow.innerText = nowDay.toLocaleString("ru", optionsNowTime)

      if(this.forecast.changeFormatTemperature.checked) {
        let changesTemperatures = this.controller.changeFormatTemperatureNowController(forecast.data[0].temp.toFixed(0), this.forecast.changeFormatTemperature);
        this.forecast.temperatureNow.innerText = changesTemperatures
      }
      else {
        this.forecast.temperatureNow.innerText = forecast.data[0].temp.toFixed(0)
      }

      this.forecast.dayWeekNow.innerText = this.getDayWeekNow(new Date(forecast.data[0].ob_time).getDay(), "En")
      this.forecast.descriptionWeather.innerText = forecast.data[0].weather.description;
      this.forecast.likeFeelsTemp.innerText = "Feels like: " +  forecast.data[0].app_temp.toFixed(0) + "°";
      this.forecast.windSpeed.innerText = "Wind: " + forecast.data[0].wind_spd.toFixed(1) + " m/s"
      this.forecast.humidity.innerText = "Humidity: " +  forecast.data[0].rh.toFixed(0) + "%"
      this.forecast.city.innerText = forecast.data[0].city_name

      

        document.getElementById("image_weather_now").src = this.getImage(forecast.data[0].weather.code, 
          this.getTimeCode(Number(nowDay.toLocaleString("ru", optionsNowTime).split(':')[0])))  //it's work


    }

    updateValuesNextDays = (forecast) => {

      let temperatureNextDays = [this.forecast.temperatureNextDays.length]


      for (let index = 0; index < this.forecast.temperatureNextDays.length; index++) {
        temperatureNextDays[index] = ((forecast.data[index + 1].max_temp + forecast.data[index + 1].min_temp) / 2).toFixed(0) + "°"
        this.forecast.nextDayWeek[index].innerText = this.getDayWeek(new Date(forecast.data[index + 1].valid_date).getDay(), "En")     
        this.forecast.imageWeatherSvg[index].src = this.getImage(forecast.data[index + 1].weather.code, 1)
      }

      if(this.forecast.changeFormatTemperature.checked) {
        let changesTemperatures = this.controller.changeFormatTemperatureNextDaysController(temperatureNextDays, this.forecast.changeFormatTemperature);
        for (let index = 0; index < changesTemperatures.length; index++) {
          this.forecast.temperatureNextDays[index].innerText = changesTemperatures[index]
        }
      }
      else {
        for (let index = 0; index < temperatureNextDays.length; index++) {
          this.forecast.temperatureNextDays[index].innerText = temperatureNextDays[index]
        }      
      }
    }

    changeTemperature() {
      this.changeTemperatureNow()
      this.changeTemperatureNextDays()
    }

    changeTemperatureNow() {
      let changesTemperatures = this.controller.changeFormatTemperatureNowController(this.forecast.temperatureNow.textContent, this.forecast.changeFormatTemperature);
      this.forecast.temperatureNow.innerText = changesTemperatures
    }

    changeTemperatureNextDays() {
      let dataTemperature = [this.forecast.temperatureNextDays[0].textContent,
                            this.forecast.temperatureNextDays[1].textContent, this.forecast.temperatureNextDays[2].textContent]
      console.log(dataTemperature)
      console.log("dataTemperature")

      let changesTemperatures = this.controller.changeFormatTemperatureNextDaysController(dataTemperature, this.forecast.changeFormatTemperature);
      for (let index = 0; index < changesTemperatures.length; index++) {
        this.forecast.temperatureNextDays[index].innerText = changesTemperatures[index]
      }
    }

    render() {
        this.forecast = {};
        this.forecast.temperatureNow = document.querySelector(selectors.numberTemperatureNow);
        this.forecast.descriptionWeather = document.querySelector(selectors.descriptionWeather);
        this.forecast.likeFeelsTemp = document.querySelector(selectors.tempFeelsLikeNow);
        this.forecast.windSpeed = document.querySelector(selectors.windSpeedNow);
        this.forecast.humidity = document.querySelector(selectors.humidity);
        this.forecast.imageWeatherNow = document.querySelector(selectors.imageWeatherNow)

        this.forecast.temperatureNextDays = [3]
        this.forecast.temperatureNextDays[0] = document.querySelector(selectors.temperatureNextDay1);
        this.forecast.temperatureNextDays[1] = document.querySelector(selectors.temperatureNextDay2);
        this.forecast.temperatureNextDays[2] = document.querySelector(selectors.temperatureNextDay3);
        
        this.forecast.nextDayWeek = [3]
        this.forecast.nextDayWeek[0] = document.querySelector(selectors.nextDayWeek1);
        this.forecast.nextDayWeek[1] = document.querySelector(selectors.nextDayWeek2);
        this.forecast.nextDayWeek[2] = document.querySelector(selectors.nextDayWeek3);

        this.forecast.imageWeatherSvg = [3]
        this.forecast.imageWeatherSvg[0] = document.getElementById(selectors.imageWeatherSvg1);
        this.forecast.imageWeatherSvg[1] = document.getElementById(selectors.imageWeatherSvg2);
        this.forecast.imageWeatherSvg[2] = document.getElementById(selectors.imageWeatherSvg3);

        this.forecast.timeNow = document.querySelector(selectors.timeNow);
        this.forecast.nameMonth = document.querySelector(selectors.nameMonth);
        this.forecast.dayMonth = document.querySelector(selectors.dayMonth);
        this.forecast.dayWeekNow = document.querySelector(selectors.dayWeekNow)
        this.forecast.city = document.querySelector(selectors.city)

        this.forecast.changeFormatTemperature = document.getElementById("change_format_temperature")
        this.forecast.changeFormatTemperature.addEventListener("click", this.changeTemperature.bind(this))


    }

    getDayWeekNow(numberDate, language) {
        let daysRu = ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'];
        let daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let daysBy = ['Няд', 'Пнд', 'Аут', 'Сер', 'Чцв', 'Пят', 'Суб']
        if("En" == language) {
          return daysEn[numberDate]
        }
        if("Ру" == language) {
          return daysRu[numberDate]
        }
        if("Бе" == language) {
          return daysBu[numberDate]
        }
      }
      
    getDayWeek(numberDate, language) {
        let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let daysBy = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота']
        if("En" == language) {
          return daysEn[numberDate]
        }
        if("Ру" == language) {
          return daysRu[numberDate]
        }
        if("Бе" == language) {
          return daysBy[numberDate]
        }
      }

          
    importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }

    getImage(codeWeather, timeCode) {
        for (let i = 0; i < weatherMap.length; i++) {
          for (let j = 0; j < weatherMap[i].weatherCode.length; j++) {

            if(weatherMap[i].weatherCode[j].code == codeWeather) {
              for (let k = 0; k < weatherMap[i].images.length; k++) {
                if(weatherMap[i].images[k].timeCode == timeCode) {
                  return weatherMap[i].images[k].svg
                }              
              }
            }            
          }         
        }
        return weatherMap[weatherMap.length - 1].images[1].svg
    }

    getTimeCode(hour) {
      if(hour >= 6 && hour <= 22) {
        return 1
      }
      else {
        return 2
      }
    }
}