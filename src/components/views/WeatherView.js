import {events, selectors} from "../../constants/constants";
import {weatherMap} from "../../mapWeather"
import {languageMap} from "../../mapLeanguage"
import App from "../../App";
import  translate, { setCORS } from "google-translate-api-browser";
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

      this.forecastNow = forecast
      let nowDay = this.getNowDay()

      this.setValues("weatherBlock", "city", this.translateWords, forecast.data[0].city_name)
      this.setValues("weatherBlock", "dayNow", this.getDayWeekNow, new Date(forecast.data[0].ob_time).getDay())
      this.setValues("weatherBlock", "month", this.getMonth, nowDay.getMonth())
      this.setWeater("weatherBlock", "weather", forecast.data[0].weather.description)
      this.setValues("weatherBlock", "humidity", this.addInfoAboutWeather, [forecast.data[0].rh.toFixed(0) + "%", languageMap.statusLanguage])
      this.setValues("weatherBlock", "feelsLike", this.addInfoFeelsLikeWeather, forecast.data[0].app_temp.toFixed(0) + "°")
      this.addWindForAllLanguage("weatherBlock", "windSpeed", forecast.data[0].wind_spd.toFixed(1))

      this.forecastBlock.dayMonth.innerText = this.getDayMonth(nowDay)

      if(this.forecastBlock.changeFormatTemperature.checked) {
        let changesTemperatures = this.controller.changeFormatTemperatureNowController(forecast.data[0].temp.toFixed(0), this.forecastBlock.changeFormatTemperature);
        this.forecastBlock.temperatureNow.innerText = changesTemperatures
      }
      else {
        this.forecastBlock.temperatureNow.innerText = forecast.data[0].temp.toFixed(0)
      }

      let timerId = setInterval(() => this.checkCity(timerId), 500);
      setInterval(() => this.updateFieldTimeNow(), 500);

      this.updateBackgroundImage(Number(nowDay.toLocaleString("ru", this.getOptionsNowTime()).split(':')[0]), nowDay.getMonth())

      document.getElementById("image_weather_now").src = this.getImage(forecast.data[0].weather.code, 
      this.getTimeCode(Number(nowDay.toLocaleString("ru", this.getOptionsNowTime()).split(':')[0])))  //it's work

    }

    checkCity(timerId) {
        window.onload = function () {
          document.body.classList.add('loaded_hiding');
        }
        console.log(document.body.style.backgroundImage)
        this.checkDataForLoad("", timerId)
    }

    checkDataForLoad(valueCity, timerId) {
      if(languageMap.globalBlocks[1].blocks[0].language[0].value != valueCity && document.body.style.backgroundImage != "") {
        this.getValueMapLanguage("weatherBlock")
        setTimeout(() => { 
          clearInterval(timerId);         
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding'); }, 2000);
      }
    }

    addWindForAllLanguage(globalBlockName, blockName, data) {
      this.setValues(globalBlockName, blockName, this.addInfoWindWeather, [data + " м/с", "ru"])
      this.setValues(globalBlockName, blockName, this.addInfoWindWeather, [data + " м/с", "en"])
      this.setValues(globalBlockName, blockName, this.addInfoWindWeather, [data + " м/с", "be"])
    }

    addInfoWindWeather(param, index, j, k) {
      if(languageMap.globalBlocks[index].blocks[j].language[k].name == param[1]) {
        if (languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ").length != 3) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value + " " + param[0]
        }
        else {
          if(languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ")[1] != param[0].split(" ")[0]) {
            languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ")[0] + " " + param[0]
          }
        }
      }
    }

    addInfoFeelsLikeWeather(param, index, j, k) {
      if (languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ").length != 3) {
        languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value + " " + param
      }
      else {
        if(languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ")[2] != param) {
          languageMap.globalBlocks[index].blocks[j].language[k].value =  languageMap.globalBlocks[index].blocks[j].language[k].value.substring(0, languageMap.globalBlocks[index].blocks[j].language[k].value.lastIndexOf(" ")) + " " + param
        }
      }
    }


    addInfoAboutWeather(param, index, j, k) {
      if (languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ").length != 2) {
        languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value + " " + param[0]
      }
      else {
        if(languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ")[1] != param[0]) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ")[0] + " " + param[0]
        }
      }
    }

    setValueNowWeekDay(param, index, j, k) {
      languageMap.globalBlocks[index].blocks[j].language[k].value = this.getDayWeekNow(param, languageMap.globalBlocks[index].blocks[j].language[k].name)
    }

    setValues(globalBlockName, blockName, func, param) {
      for (let index = 0; index < languageMap.globalBlocks.length; index++) {
        if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
          for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
            if(languageMap.globalBlocks[index].blocks[j].nameBlock == blockName) {
              for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                  func(param, index, j, k)   
              }
            }         
          }
        }  
      }  
    }

    setValueDiscriptionWeather(param, index, j, k) {
      if(languageMap.globalBlocks[index].blocks[j].language[k].name == "ru") {
        languageMap.globalBlocks[index].blocks[j].language[k].value = param[0]
      }
      if(languageMap.globalBlocks[index].blocks[j].language[k].name == "en") {
        languageMap.globalBlocks[index].blocks[j].language[k].value = param[1]
      }                
      if(languageMap.globalBlocks[index].blocks[j].language[k].name == "be") {
        languageMap.globalBlocks[index].blocks[j].language[k].value = param[2]
      } 
    }

    translateWords(words, i, j, k) {
      translate(words, {to: languageMap.globalBlocks[i].blocks[j].language[k].name})
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

    updateBackgroundImage(time, month) {
      // this.getRandonChangePlaceWords(this.getImageFont(this.forecastNow.data[0].weather.code, 
      //   this.getTimeCode(time), this.getTimeYearCode(month)))

      console.log("url(https://source.unsplash.com/1600x900/?" +  this.getImageFont(this.forecastNow.data[0].weather.code, 
      this.getTimeCode(time), this.getTimeYearCode(month)))

      // document.body.style.backgroundImage = "linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%"
      document.body.style.backgroundImage = "linear-gradient(180deg, rgba(8, 15, 26, 0.59) 100%, rgba(17, 17, 46, 0.46) 100%), url(https://source.unsplash.com/1600x900/?" +  this.getImageFont(this.forecastNow.data[0].weather.code, 
      this.getTimeCode(time), this.getTimeYearCode(month)) + ")";

      if (window.matchMedia("(min-width: 1020px)").matches) {
        document.body.style.backgroundSize = "130% auto" ;
      } 
      if (window.matchMedia("(max-width: 1020px)").matches) {
        document.body.style.backgroundSize = "3000px 1688px" ;
      }
      if (window.matchMedia("(max-width: 600px)").matches) {
        document.body.style.backgroundSize = "1650px 928px" ;
      }
    }

    updateValuesNextDays = (forecast) => {

      let temperatureNextDays = [this.forecastBlock.temperatureNextDays.length]

      for (let index = 0; index < this.forecastBlock.temperatureNextDays.length; index++) {
        temperatureNextDays[index] = ((forecast.data[index + 1].max_temp + forecast.data[index + 1].min_temp) / 2).toFixed(0) + "°"
        this.setValues("weatherBlock", this.nameBlocksNextDays[index], this.getDayWeek, new Date(forecast.data[index + 1].valid_date).getDay())
        this.forecastBlock.imageWeatherSvg[index].src = this.getImage(forecast.data[index + 1].weather.code, 1)
      }

      this.getValueMapLanguage("weatherBlock")
      console.log(this.forecastBlock.changeFormatTemperature.checked)

      if(this.forecastBlock.changeFormatTemperature.checked) {
        let changesTemperatures = this.controller.changeFormatTemperatureNextDaysController(temperatureNextDays, this.forecastBlock.changeFormatTemperature);
        for (let index = 0; index < changesTemperatures.length; index++) {
          this.forecastBlock.temperatureNextDays[index].innerText = changesTemperatures[index]
        }
      }
      else {
        for (let index = 0; index < temperatureNextDays.length; index++) {
          this.forecastBlock.temperatureNextDays[index].innerText = temperatureNextDays[index]
        }      
      }

    }

    changeTemperature(block, connectionBlock) {
      connectionBlock.checked = block.checked
      this.changeTemperatureNow()
      this.changeTemperatureNextDays()
      localStorage.setItem("temperature", block.checked)
    }

    changeTemperatureNow() {
      let changesTemperatures = this.controller.changeFormatTemperatureNowController(this.forecastBlock.temperatureNow.textContent, this.forecastBlock.changeFormatTemperature);
      this.forecastBlock.temperatureNow.innerText = changesTemperatures
    }

    changeTemperatureNextDays() {
      let dataTemperature = [this.forecastBlock.temperatureNextDays[0].textContent,
                            this.forecastBlock.temperatureNextDays[1].textContent, this.forecastBlock.temperatureNextDays[2].textContent]

      let changesTemperatures = this.controller.changeFormatTemperatureNextDaysController(dataTemperature, this.forecastBlock.changeFormatTemperature);
      for (let index = 0; index < changesTemperatures.length; index++) {
        this.forecastBlock.temperatureNextDays[index].innerText = changesTemperatures[index]
      }
    }

    // changeColorSideMenu() {      
    //   if(!this.checkColor) {
    //     this.forecastBlock.sideMenu.style.background = "rgba(76, 82, 85, 0.4)";
    //     this.checkColor = true
    //     console.log("!1")
    //   }
    //   else {
    //     this.forecastBlock.sideMenu.style.background = "rgba(174, 180, 185, 0.5)";
    //     this.checkColor = false
    //     console.log("!2")
    //   }
    // }

    render() {
      languageMap.statusLanguage = localStorage.getItem("language")

      this.forecastBlock = {};

      // this.checkColor = false
      // this.forecastBlock.sideMenu = document.querySelector(selectors.sideMenu)
      // this.forecastBlock.sideMenu.addEventListener("click", this.changeColorSideMenu.bind(this))
      // this.forecastBlock.sideMenu.style.setProperty("-moz-transition", "background 0.4s 0.1s ease");
      // this.forecastBlock.sideMenu.style.setProperty("-o-transition", "background 0.4s 0.1s ease");
      // this.forecastBlock.sideMenu.style.setProperty("-webkit-transition", "background 0.4s 0.1s ease");

      this.forecastBlock.updateImage = document.querySelector(selectors.svgUpdate)
      this.forecastBlock.updateImage.addEventListener("click", this.updateBackgroundImage.bind(this, 
        this.getHourNow(this.getNowDay()), this.getNowDay().getMonth()))


      this.forecastBlock.temperatureNow = document.querySelector(selectors.numberTemperatureNow);
      this.forecastBlock.descriptionWeather = document.querySelector(selectors.descriptionWeather);
      this.forecastBlock.likeFeelsTemp = document.querySelector(selectors.tempFeelsLikeNow);
      this.forecastBlock.windSpeed = document.querySelector(selectors.windSpeedNow);
      this.forecastBlock.humidity = document.querySelector(selectors.humidity);
      this.forecastBlock.imageWeatherNow = document.querySelector(selectors.imageWeatherNow)

      this.forecastBlock.temperatureNextDays = [3]
      this.forecastBlock.temperatureNextDays[0] = document.querySelector(selectors.temperatureNextDay1);
      this.forecastBlock.temperatureNextDays[1] = document.querySelector(selectors.temperatureNextDay2);
      this.forecastBlock.temperatureNextDays[2] = document.querySelector(selectors.temperatureNextDay3);
      
      this.forecastBlock.nextDayWeek = [3]
      this.forecastBlock.nextDayWeek[0] = document.querySelector(selectors.nextDayWeek1);
      this.forecastBlock.nextDayWeek[1] = document.querySelector(selectors.nextDayWeek2);
      this.forecastBlock.nextDayWeek[2] = document.querySelector(selectors.nextDayWeek3);

      this.forecastBlock.imageWeatherSvg = [3]
      this.forecastBlock.imageWeatherSvg[0] = document.getElementById(selectors.imageWeatherSvg1);
      this.forecastBlock.imageWeatherSvg[1] = document.getElementById(selectors.imageWeatherSvg2);
      this.forecastBlock.imageWeatherSvg[2] = document.getElementById(selectors.imageWeatherSvg3);

      this.forecastBlock.timeNow = document.querySelector(selectors.timeNow);

      this.forecastBlock.nameMonth = document.querySelector(selectors.nameMonth);
      this.forecastBlock.dayMonth = document.querySelector(selectors.dayMonth);
      this.forecastBlock.dayWeekNow = document.querySelector(selectors.dayWeekNow)
      this.forecastBlock.city = document.querySelector(selectors.city)

      this.forecastBlock.changeFormatTemperature = document.getElementById("change_format_temperature")
      this.forecastBlock.changeFormatTemperatureMobile = document.getElementById("change_format_temperature_mobile")

      this.forecastBlock.changeFormatTemperature.addEventListener("click", this.changeTemperature.bind(this, this.forecastBlock.changeFormatTemperature, this.forecastBlock.changeFormatTemperatureMobile))
      this.forecastBlock.changeFormatTemperatureMobile.addEventListener("click", this.changeTemperature.bind(this, this.forecastBlock.changeFormatTemperatureMobile, this.forecastBlock.changeFormatTemperature))

      this.forecastBlock.changeLanguages = document.getElementById("change_leanguage")
      this.forecastBlock.changeLanguages.addEventListener("change", this.changeLanguages.bind(this))
      this.forecastBlock.changeLanguagesMobile = document.getElementById("change_leanguage_mobile")
      this.forecastBlock.changeLanguagesMobile.addEventListener("change", this.changeLanguages.bind(this))
      
      this.forecastBlock.changeFormatTemperature.checked = JSON.parse(localStorage.getItem("temperature"))
      this.forecastBlock.changeFormatTemperatureMobile.checked = JSON.parse(localStorage.getItem("temperature"))
      console.log(this.forecastBlock.changeFormatTemperature.checked)
      this.forecastBlock.changeLanguages.selectedIndex = localStorage.getItem("languageIndex")
      this.forecastBlock.changeLanguagesMobile.selectedIndex = localStorage.getItem("languageIndex")

      console.log(this.forecastBlock.changeLanguages.selectedIndex)

      this.nameBlocksNextDays = ["dayNext1", "dayNext2", "dayNext3"]

      this.mapDataForecast = new Map()
      this.mapDataForecast.set("city", this.forecastBlock.city)
      this.mapDataForecast.set("month", this.forecastBlock.nameMonth)
      this.mapDataForecast.set("weather", this.forecastBlock.descriptionWeather)
      this.mapDataForecast.set("dayNext1", this.forecastBlock.nextDayWeek[0])
      this.mapDataForecast.set("dayNext2", this.forecastBlock.nextDayWeek[1])
      this.mapDataForecast.set("dayNext3", this.forecastBlock.nextDayWeek[2])
      this.mapDataForecast.set("dayNow", this.forecastBlock.dayWeekNow)
      this.mapDataForecast.set("feelsLike", this.forecastBlock.likeFeelsTemp)
      this.mapDataForecast.set("humidity", this.forecastBlock.humidity)
      this.mapDataForecast.set("windSpeed", this.forecastBlock.windSpeed)

      // localStorage.setItem("language", languageMap.statusLanguage)
    }

    changeLanguages() {
      if (window.matchMedia("(max-width: 600px)").matches) {
        languageMap.statusLanguage = this.forecastBlock.changeLanguagesMobile.options[this.forecastBlock.changeLanguagesMobile.selectedIndex].value.toLowerCase()
        localStorage.setItem("languageIndex", this.forecastBlock.changeLanguagesMobile.selectedIndex)
        this.forecastBlock.changeLanguages.selectedIndex = this.forecastBlock.changeLanguagesMobile.selectedIndex
      }
      else {
        languageMap.statusLanguage = this.forecastBlock.changeLanguages.options[this.forecastBlock.changeLanguages.selectedIndex].value.toLowerCase()
        localStorage.setItem("languageIndex", this.forecastBlock.changeLanguages.selectedIndex)
        this.forecastBlock.changeLanguagesMobile.selectedIndex = this.forecastBlock.changeLanguages.selectedIndex

      }
      this.getValueMapLanguage("weatherBlock")
      this.forecastBlock.timeNow.innerText = this.getNowDay().toLocaleString(languageMap.statusLanguage, this.getOptionsNowTime())
      localStorage.setItem("language", languageMap.statusLanguage)

    }

    updateFieldTimeNow() {
      this.forecastBlock.timeNow.innerText = this.getNowDay().toLocaleString(languageMap.statusLanguage, this.getOptionsNowTime())
    }

    getValueMapLanguage(globalBlockName) {
      for (var [key, value] of this.mapDataForecast) {
        for (let index = 0; index < languageMap.globalBlocks.length; index++) {
          if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
            for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
              if(languageMap.globalBlocks[index].blocks[j].nameBlock == key) {
                for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                  if(languageMap.globalBlocks[index].blocks[j].language[k].name == languageMap.statusLanguage) {
                    value.innerText = languageMap.globalBlocks[index].blocks[j].language[k].value 
                  }
                }
              }         
            }
          }
          
        }      
      }
      console.log(languageMap)
    }

    getDayWeekNow(param, index, j, k) {
        let daysRu = ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'];
        let daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let daysBe = ['Няд', 'Пнд', 'Аут', 'Сер', 'Чцв', 'Пят', 'Суб']
        if("en" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = daysEn[param]
        }
        if("ru" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = daysRu[param]
        }
        if("be" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = daysBe[param]
        }
      }

      getMonth(numberDate, index, j, k) {
        let monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Мая', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        let monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let monthsBe = ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Май', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань']
        if("en" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = monthsEn[numberDate]
        }
        if("ru" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = monthsRu[numberDate]
        }
        if("be" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = monthsBe[numberDate]
        }
      }  
      
      setWeater(globalBlockName, blockName, nameWeather) {
        let monthsRu = ['Гроза с небольшим дождем', 'Гроза с дождем', 'Гроза с проливным дождем', 'Гроза с легкой моросью', 'Гроза с моросящим дождем', 'Гроза с сильной моросью', 'Гроза с градом', 'Мелкий дождь', 'Изморось', 'Сильная изморось', 'Небольшой дождь', 'Умеренный дождь', 'Сильный дождь', 'Ледяной дождь', 'Небольшой дождь', 'Ливень', 'Сильный ливень', 'Небольшой снег', 'Снег', 'Сильный снег', 'Снег с дождём', 'Мокрый снег', 'Сильный мокрый снег', 'Снегопад', 'Сильный снегопад', 'Порывистый ветер', 'Дымка', 'Туман', 'Мгла', 'Песок/пыль', 'Густой туман', 'Морозный туман', 'Ясно', 'Малооблачно', 'Рассеянные облака', 'Облачно', 'Пасмурно', 'Неизвестные осадки'];
        let monthsEn = ['Thunderstorm with light rain', 'Thunderstorm with rain', 'Thunderstorm with heavy rain', 'Thunderstorm with light drizzle', 'Thunderstorm with drizzle', 'Thunderstorm with heavy drizzle', 'Thunderstorm with Hail', '	Light Drizzle', 'Drizzle', 'Heavy Drizzle', 'Light Rain', 'Moderate Rain', 'Heavy Rain', 'Freezing rain', 'Light shower rain', 'Shower rain', 'Heavy shower rain', 'Light snow', 'Snow', 'Heavy Snow', 'Mix snow/rain', 'Sleet', 'Heavy sleet', 'Snow shower', 'Heavy snow shower', 'Flurries', 'Mist', 'Smoke', 'Haze', 'Sand/dust', 'Fog', 'Freezing Fog', 'Clear sky', 'Few clouds', 'Scattered clouds', 'Broken clouds', 'Overcast clouds', 'Unknown Precipitation']
        let monthsBe = ['Навальніца з невялікім дажджом', 'Навальніца з дажджом', 'Навальніца з праліўным дажджом', 'Навальніца з лёгкай морасью', 'Навальніца з дробныы дожджом', 'Навальніца з моцнай морасью', 'Навальніца з градам', 'Дробны дождж', 'Iзмарась', 'Моцная измарась', 'Невялікі дождж', 'Ўмераны дождж', 'Моцны дождж', 'Ледзяны дождж', 'Невялікі дождж', 'Лiвень', 'Сiльны лiвень', 'Невялікі снег', 'Снег', 'Моцны снег', 'Снег с дожджом', 'Мокры снег', 'Моцны мокры снег', 'Снегапад', 'Моцны снегапад', 'Парывісты вецер', 'Дымка', 'Туман', 'Iмгла', 'Пясок/пыл', 'Густы туман', 'Морозны туман', 'Ясна', 'Малавоблачна', 'Рассеяныя аблокі', 'Воблачна', 'Пахмурна', 'Невядомыя ападкі'];
        for (let index = 0; index < monthsEn.length; index++) {
          if(monthsEn[index].toLowerCase() == nameWeather.toLowerCase()) {
            this.setValues(globalBlockName, blockName, this.setValueDiscriptionWeather, [monthsRu[index], monthsEn[index], monthsBe[index]])
          }          
        }
      }
      

      //не забыть удалить этот метод
    getDayWeek(numberDate, index, j, k) {
        let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let daysBy = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота']
        if("en" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = daysEn[numberDate]
        }
        if("ru" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = daysRu[numberDate]
        }
        if("be" == languageMap.globalBlocks[index].blocks[j].language[k].name) {
          languageMap.globalBlocks[index].blocks[j].language[k].value = daysBy[numberDate]
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

    getRandonChangePlaceWords(words) {
      let listWords = words.split(",")
      listWords = this.getChangeList(listWords)
      console.log(listWords.join())
    }

    getChangeList(list) {
      return   list.sort(() => Math.random() - 0.5);
    }

    getTimeCode(hour) {
      if(hour >= 6 && hour <= 22) {
        return 1
      }
      else {
        return 2
      }
    }

    getNowDay() {
      let nowDaySecond = Date.now();
      return new Date(nowDaySecond);
    }

    getHourNow(nowDay) {
      return Number(nowDay.toLocaleString("ru", this.getOptionsNowTime()).split(':')[0])
    }

    getDayMonth(nowDay) {
      let optionsDayMonth = {
        day: 'numeric',
      };
      return nowDay.toLocaleString("en", optionsDayMonth)
    }

    getOptionsNowTime() {
      return {
        hour: 'numeric',
        minute: 'numeric',
      };
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