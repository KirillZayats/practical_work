import {events, selectors} from "../../constants/constants";
import {weatherMap} from "../../mapWeather"
import {languageMap} from "../../mapLeanguage"
import translate, { setCORS } from "google-translate-api-browser";
setCORS("https://cors-anywhere.herokuapp.com/");

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

      var dataMap = [forecast.data[0].city_name, nowDay.toLocaleString("en", optionsNameMonth), forecast.data[0].weather.description]
      for (let index = 0; index < this.nameBlocksNowDay.length; index++) {
        this.setValueMapLanguage("weatherBlock", this.nameBlocksNowDay[index], dataMap[index])
      }
      this.setValueNowWeekDay("weatherBlock", "dayNow", new Date(forecast.data[0].ob_time).getDay()) 


      
      this.addInfoAboutWeather("weatherBlock", "humidity", forecast.data[0].rh.toFixed(0) + "%")
      this.addInfoAboutWeather("weatherBlock", "feelsLike", forecast.data[0].app_temp.toFixed(0) + "°")
      this.addWindForAllLanguage("weatherBlock", "windSpeed", forecast.data[0].wind_spd.toFixed(1))


      for (var [key, value] of this.mapDataForecast) {
        this.getValueMapLanguage("weatherBlock", key, value)
      }
      // this.forecast.nameMonth.innerText = nowDay.toLocaleString("en", optionsNameMonth)
      this.forecast.timeNow.innerText = nowDay.toLocaleString("ru", optionsNowTime)

      if(this.forecast.changeFormatTemperature.checked) {
        let changesTemperatures = this.controller.changeFormatTemperatureNowController(forecast.data[0].temp.toFixed(0), this.forecast.changeFormatTemperature);
        this.forecast.temperatureNow.innerText = changesTemperatures
      }
      else {
        this.forecast.temperatureNow.innerText = forecast.data[0].temp.toFixed(0)
      }
      // console.log(forecast.data[0].ob_time)
      // this.forecast.dayWeekNow.innerText = this.getDayWeekNow(new Date(forecast.data[0].ob_time).getDay(), "en")
      // this.forecast.descriptionWeather.innerText = forecast.data[0].weather.description;
      // this.forecast.likeFeelsTemp.innerText = "Feels like: " +  forecast.data[0].app_temp.toFixed(0) + "°";
      // this.forecast.windSpeed.innerText = "Wind: " + forecast.data[0].wind_spd.toFixed(1) + " m/s"
      // this.forecast.humidity.innerText = "Humidity: " +  forecast.data[0].rh.toFixed(0) + "%"
      // this.forecast.city.innerText = forecast.data[0].city_name

      this.updateBackgroundImage(forecast, Number(nowDay.toLocaleString("ru", optionsNowTime).split(':')[0]), nowDay.getMonth())

      document.getElementById("image_weather_now").src = this.getImage(forecast.data[0].weather.code, 
      this.getTimeCode(Number(nowDay.toLocaleString("ru", optionsNowTime).split(':')[0])))  //it's work
      console.log(languageMap)

      // var dataMap = [forecast.data[0].city_name, nowDay.toLocaleString("en", optionsNameMonth), forecast.data[0].weather.description]
      // for (let index = 0; index < this.nameBlocksNowDay.length; index++) {
      //   this.setValueMapLanguage("weatherBlock", this.nameBlocksNowDay[index], dataMap[index])
      // }
      // this.setValueNowWeekDay("weatherBlock", "dayNow", new Date(forecast.data[0].ob_time).getDay()) 


      
      // this.addInfoAboutWeather("weatherBlock", "humidity", forecast.data[0].rh.toFixed(0) + "%")
      // this.addInfoAboutWeather("weatherBlock", "feelsLike", forecast.data[0].app_temp.toFixed(0) + "°")
      // this.addWindForAllLanguage("weatherBlock", "windSpeed", forecast.data[0].wind_spd.toFixed(1))
    }

    addWindForAllLanguage(globalBlockName, blockName, data) {
      this.addInfoWindWeather(globalBlockName, blockName, data + " м/с", "ru")
      this.addInfoWindWeather(globalBlockName, blockName, data + " m/s", "en")
      this.addInfoWindWeather(globalBlockName, blockName, data + " м/с", "be")

    }

    addInfoWindWeather(globalBlockName, blockName, data, language) {
      
      for (let index = 0; index < languageMap.globalBlocks.length; index++) {
        if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
          for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
            if(languageMap.globalBlocks[index].blocks[j].nameBlock == blockName) {
              for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                if(languageMap.globalBlocks[index].blocks[j].language[k].name == language) {
                  languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value + " " + data
                }
              }
            }         
          }
        }
        
      }  
    }


    addInfoAboutWeather(globalBlockName, blockName, data) {
      
      for (let index = 0; index < languageMap.globalBlocks.length; index++) {
        if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
          for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
            if(languageMap.globalBlocks[index].blocks[j].nameBlock == blockName) {
              for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value + " " + data
              }
            }         
          }
        }
        
      }  
    }

    setValueNowWeekDay(globalBlockName, blockName, data) {
      for (let index = 0; index < languageMap.globalBlocks.length; index++) {
        if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
          for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
            if(languageMap.globalBlocks[index].blocks[j].nameBlock == blockName) {
              for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                languageMap.globalBlocks[index].blocks[j].language[k].value = this.getDayWeekNow(data, languageMap.globalBlocks[index].blocks[j].language[k].name)

              }
            }         
          }
        }
        
      }  
    }

    setValueMapLanguage(globalBlockName, blockName, data) {
      for (let index = 0; index < languageMap.globalBlocks.length; index++) {
        if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
          for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
            if(languageMap.globalBlocks[index].blocks[j].nameBlock == blockName) {
              for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                this.translateWords(data, languageMap.globalBlocks[index].blocks[j].language[k].name, languageMap, index, j, k)
              }
            }         
          }
        }
        
      }
    }

    translateWords(words, codeLanguage, languageMap, i, j, k) {
      translate(words, {to: codeLanguage})
      .then(res => {
        languageMap.globalBlocks[i].blocks[j].language[k].value = res.text
      })
      .catch(err => {
        console.error(err);
      });
    }

    getValue(value) {
      this.test = value
    }

    updateBackgroundImage(forecast, time, month) {
      document.body.style.backgroundImage = "linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%), url(https://source.unsplash.com/1600x900/?" +  this.getImageFont( forecast.data[0].weather.code, 
      this.getTimeCode(time), this.getTimeYearCode(month)) + ")";
      // document.body.style.backgroundSize = "1920px 1080px" ;

      if (window.matchMedia("(min-width: 1020px)").matches) {
        document.body.style.backgroundSize = "100% auto" ;
      } 
      if (window.matchMedia("(max-width: 1020px)").matches) {
        document.body.style.backgroundSize = "3000px 1688px" ;
      }
      if (window.matchMedia("(max-width: 600px)").matches) {
        document.body.style.backgroundSize = "1650px 928px" ;
      }
    }

    updateValuesNextDays = (forecast) => {

      let temperatureNextDays = [this.forecast.temperatureNextDays.length]

      var dataMap = []
      for (let index = 0; index < this.forecast.temperatureNextDays.length; index++) {
        temperatureNextDays[index] = ((forecast.data[index + 1].max_temp + forecast.data[index + 1].min_temp) / 2).toFixed(0) + "°"
        this.forecast.nextDayWeek[index].innerText = this.getDayWeek(new Date(forecast.data[index + 1].valid_date).getDay(), "en")     
        dataMap[index] = this.getDayWeekNew(new Date(forecast.data[index + 1].valid_date).getDay())
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

      for (let index = 0; index < this.nameBlocksNextDays.length; index++) {
        this.setValueMapLanguage("weatherBlock", this.nameBlocksNextDays[index], dataMap[index])
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

        this.forecast.changeLanguages = document.getElementById("change_leanguage")
        this.forecast.changeLanguages.addEventListener("change", this.changeLanguages.bind(this))

        this.nameBlocksNowDayForAddInfo = ["feelsLike", "humidity", "windSpeed"]
        // this.mapDataForecastNowDay = new Map()
        // this.mapDataForecastNowDay.set("feelsLike", this.forecast.tempFeelsLikeNow)
        // this.mapDataForecastNowDay.set("humidity", this.forecast.humidity)

        this.nameBlocksNowDay = ["city", "month", "weather"]
        this.nameBlocksNextDays = ["dayNext1", "dayNext2", "dayNext3"]

        this.mapDataForecast = new Map()
        this.mapDataForecast.set("city", this.forecast.city)
        this.mapDataForecast.set("month", this.forecast.nameMonth)
        this.mapDataForecast.set("weather", this.forecast.descriptionWeather)
        this.mapDataForecast.set("dayNext1", this.forecast.nextDayWeek[0])
        this.mapDataForecast.set("dayNext2", this.forecast.nextDayWeek[1])
        this.mapDataForecast.set("dayNext3", this.forecast.nextDayWeek[2])
        this.mapDataForecast.set("dayNow", this.forecast.dayWeekNow)
        this.mapDataForecast.set("feelsLike", this.forecast.likeFeelsTemp)
        this.mapDataForecast.set("humidity", this.forecast.humidity)
        this.mapDataForecast.set("windSpeed", this.forecast.windSpeed)

    }

    changeLanguages() {
      console.log(this.forecast.changeLanguages.options[this.forecast.changeLanguages.selectedIndex].value)
      languageMap.statusLanguage = this.forecast.changeLanguages.options[this.forecast.changeLanguages.selectedIndex].value.toLowerCase()
      console.log(languageMap)
      // this.forecast.dayWeekNow.innerText = this.getDayWeekNow(new Date(forecast.data[0].ob_time).getDay(), languageMap.statusLanguage)
      
      for (var [key, value] of this.mapDataForecast) {
        this.getValueMapLanguage("weatherBlock", key, value)
      }

      this.getDayWeekNow
    }

    getValueMapLanguage(globalBlockName, blockName, value) {
      for (let index = 0; index < languageMap.globalBlocks.length; index++) {
        if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
          for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
            if(languageMap.globalBlocks[index].blocks[j].nameBlock == blockName) {
              for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                if(languageMap.globalBlocks[index].blocks[j].language[k].name == languageMap.statusLanguage) {
                  console.log("")
                  value.innerText = languageMap.globalBlocks[index].blocks[j].language[k].value 
                }
              }
            }         
          }
        }
        
      }
    }

    getDayWeekNow(numberDate, language) {
        let daysRu = ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'];
        let daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let daysBy = ['Няд', 'Пнд', 'Аут', 'Сер', 'Чцв', 'Пят', 'Суб']
        if("en" == language) {
          return daysEn[numberDate]
        }
        if("ru" == language) {
          return daysRu[numberDate]
        }
        if("be" == language) {
          return daysBy[numberDate]
        }
      }

      getDayWeekNew(numberDate) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return days[numberDate]

      }
      

      //не забыть удалить этот метод
    getDayWeek(numberDate, language) {
        let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let daysBy = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота']
        if("en" == language) {
          return daysEn[numberDate]
        }
        if("ru" == language) {
          return daysRu[numberDate]
        }
        if("be" == language) {
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

    getImageFont(codeWeather, timeCode, timeYearCode) {
      for (let i = 0; i < weatherMap.length; i++) {
        for (let j = 0; j < weatherMap[i].weatherCode.length; j++) {

          if(weatherMap[i].weatherCode[j].code == codeWeather) {
            for (let k = 0; k < weatherMap[i].imagesFont.length; k++) {
              if(weatherMap[i].imagesFont[k].timeCode == timeCode) {

                for (let g = 0; g < 4; g++) {
                  if(weatherMap[i].imagesFont[k].timeYear[g].timeYearCode == timeYearCode) {
                    return weatherMap[i].imagesFont[k].timeYear[g].image

                  }
                }
              }              
            }
          }            
        }         
      }
      return weatherMap[weatherMap.length - 1].imagesFont[1].image
    }

    getTimeCode(hour) {
      if(hour >= 6 && hour <= 22) {
        return 1
      }
      else {
        return 2
      }
    }

    getTimeYearCode(month) {
      if(month == 1 || month == 2 || month == 12)
      {
        return 1
      }
      if(month >= 3 &&  month <= 5)
      {
        return 2
      }
      if(month >= 6 &&  month <= 8)
      {
        return 3
      }
      if(month >= 9 &&  month <= 11) {
        return 4
      }

    }
}