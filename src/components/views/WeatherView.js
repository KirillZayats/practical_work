import {events, selectors} from "../../constants/constants";
import controllers from "../../constants/controllers";
import weatherMap from "../../../weatherMap.json"
// var images = require.context('../../../dist/assets/svg/weather/', true);

export default class WeatherView {
    constructor({parentDom, controller, observer}) {
        this.parentDom = parentDom;
        this.observer = observer;
        this.controller = controller;
        this.observer.subscribe(events.weatherUpdatedNow, this.updateValuesNow);
        this.observer.subscribe(events.weatherUpdatedNextDays, this.updateValuesNextDays);

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
      
      console.log(nowDay.toLocaleString("ru", optionsNowTime))
      console.log(forecast.data[0])
      this.forecast.dayMonth.innerText = nowDay.toLocaleString("en", optionsDayMonth)
      this.forecast.nameMonth.innerText = nowDay.toLocaleString("en", optionsNameMonth)
      this.forecast.timeNow.innerText = nowDay.toLocaleString("ru", optionsNowTime)

      this.forecast.dayWeekNow.innerText = this.getDayWeekNow(new Date(forecast.data[0].ob_time).getDay(), "En")
      this.forecast.temperatureNow.innerText = forecast.data[0].temp.toFixed(0)
      this.forecast.descriptionWeather.innerText = forecast.data[0].weather.description;
      this.forecast.likeFeelsTemp.innerText = "Feels like: " +  forecast.data[0].app_temp.toFixed(0) + "°";
      this.forecast.windSpeed.innerText = "Wind: " + forecast.data[0].wind_spd.toFixed(1) + " m/s"
      this.forecast.humidity.innerText = "Humidity: " +  forecast.data[0].rh.toFixed(0) + "%"
      this.forecast.city.innerText = forecast.data[0].city_name

      let imageName = this.getImage(forecast.data[0].weather.code, this.getTimeCode(Number(nowDay.toLocaleString("ru", optionsNowTime).split(':')[0])))
      console.log(imageName)

              // var img = document.getElementById("image_weather_now");
        // img.src = image
        // console.log(images("bit_sunny.svg", true))
        // console.log("QQQ")
        // document.getElementById("image_weather_now").src = images("bit_sunny.svg")


          
        // const images = this.importAll(require.context('../../../dist/assets/svg/weather/', false, /\.(svg)$/));
        // console.log(images['bit_sunny.svg'])
        // document.getElementById("image_weather_now").src = images['bit_sunny.svg']  //it's work


    }

    updateValuesNextDays = (forecast) => {
      for (let index = 0; index < this.forecast.temperatureNextDays.length; index++) {
        this.forecast.temperatureNextDays[index].innerText = ((forecast.data[index + 1].max_temp + forecast.data[index + 1].min_temp) / 2).toFixed(0) + "°"
        this.forecast.nextDayWeek[index].innerText = this.getDayWeek(new Date(forecast.data[index + 1].valid_date).getDay(), "En")
        let imageName = this.getImage(forecast.data[index + 1].weather.code, 1)
        console.log(imageName)
      }
    }

    render() {
        this.forecast = {};
        this.forecast.temperatureNow = document.querySelector(selectors.numberTemperatureNow);
        this.forecast.descriptionWeather = document.querySelector(selectors.descriptionWeather);
        this.forecast.likeFeelsTemp = document.querySelector(selectors.tempFeelsLikeNow);
        this.forecast.windSpeed = document.querySelector(selectors.windSpeedNow);
        this.forecast.humidity = document.querySelector(selectors.humidity);

        this.forecast.temperatureNextDays = [3]
        this.forecast.temperatureNextDays[0] = document.querySelector(selectors.temperatureNextDay1);
        this.forecast.temperatureNextDays[1] = document.querySelector(selectors.temperatureNextDay2);
        this.forecast.temperatureNextDays[2] = document.querySelector(selectors.temperatureNextDay3);
        
        this.forecast.nextDayWeek = [3]
        this.forecast.nextDayWeek[0] = document.querySelector(selectors.nextDayWeek1);
        this.forecast.nextDayWeek[1] = document.querySelector(selectors.nextDayWeek2);
        this.forecast.nextDayWeek[2] = document.querySelector(selectors.nextDayWeek3);

        this.forecast.timeNow = document.querySelector(selectors.timeNow);
        this.forecast.nameMonth = document.querySelector(selectors.nameMonth);
        this.forecast.dayMonth = document.querySelector(selectors.dayMonth);
        this.forecast.dayWeekNow = document.querySelector(selectors.dayWeekNow)
        this.forecast.city = document.querySelector(selectors.city)

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
        for (let i = 0; i < weatherMap.weatherMap.length; i++) {
          for (let j = 0; j < weatherMap.weatherMap[i].weatherCode.length; j++) {

            if(weatherMap.weatherMap[i].weatherCode[j].code == codeWeather) {
              for (let k = 0; k < weatherMap.weatherMap[i].images.length; k++) {
                if(weatherMap.weatherMap[i].images[k].timeCode == timeCode) {
                  return weatherMap.weatherMap[i].images[k].svg
                }              
              }
            }            
          }         
        }
        return null
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