import overcast from "../dist/assets/svg/weather/overcast.svg"
import nt_overcast from "../dist/assets/svg/weather/nt_overcast.svg"
import partlycloudyfew from "../dist/assets/svg/weather/partlycloudyfew.svg"
import nt_partlycloudyfew from "../dist/assets/svg/weather/nt_partlycloudyfew.svg"
import partlycloudy from "../dist/assets/svg/weather/partlycloudy.svg"
import nt_partlycloudy from "../dist/assets/svg/weather/nt_partlycloudy.svg"
import clear from "../dist/assets/svg/weather/clear.svg"
import nt_clear from "../dist/assets/svg/weather/nt_clear.svg"
import fog from "../dist/assets/svg/weather/fog.svg"
import nt_fog from "../dist/assets/svg/weather/nt_fog.svg"
import haze from "../dist/assets/svg/weather/haze.svg"
import nt_haze from "../dist/assets/svg/weather/nt_haze.svg"
import flurries from "../dist/assets/svg/weather/flurries.svg"
import nt_flurries from "../dist/assets/svg/weather/nt_flurries.svg"
import sleet from "../dist/assets/svg/weather/sleet.svg"
import nt_sleet from "../dist/assets/svg/weather/nt_sleet.svg"
import snow from "../dist/assets/svg/weather/snow.svg"
import nt_snow from "../dist/assets/svg/weather/nt_snow.svg"
import chancesnow from "../dist/assets/svg/weather/chancesnow.svg"
import nt_chancesnow from "../dist/assets/svg/weather/nt_chancesnow.svg"
import chancerain from "../dist/assets/svg/weather/chancerain.svg"
import nt_chancerain from "../dist/assets/svg/weather/nt_chancerain.svg"
import rain from "../dist/assets/svg/weather/rain.svg"
import nt_rain from "../dist/assets/svg/weather/nt_rain.svg"
import lightning from "../dist/assets/svg/weather/lightning.svg"
import tstorm from "../dist/assets/svg/weather/tstorm.svg"
import errorLoadImageWeather from "../dist/assets/svg/weather/offline.svg"

let mapWeather = new Map()
mapWeather.set("overcast", overcast)
mapWeather.set("nt_overcast", nt_overcast) 
mapWeather.set("partlycloudyfew", partlycloudyfew) 
mapWeather.set("nt_partlycloudyfew", nt_partlycloudyfew) 
mapWeather.set("partlycloudy", partlycloudy) 
mapWeather.set("nt_partlycloudy", nt_partlycloudy) 
mapWeather.set("clear", clear) 
mapWeather.set("nt_clear", nt_clear) 
mapWeather.set("fog", fog) 
mapWeather.set("nt_fog", nt_fog) 
mapWeather.set("haze", haze) 
mapWeather.set("nt_haze", nt_haze) 
mapWeather.set("flurries", flurries) 
mapWeather.set("nt_flurries", nt_flurries) 
mapWeather.set("sleet", sleet) 
mapWeather.set("nt_sleet", nt_sleet) 
mapWeather.set("snow", snow) 
mapWeather.set("nt_snow", nt_snow) 
mapWeather.set("chancesnow", chancesnow) 
mapWeather.set("nt_chancesnow", nt_chancesnow) 
mapWeather.set("chancerain", chancerain) 
mapWeather.set("nt_chancerain", nt_chancerain) 
mapWeather.set("rain", rain) 
mapWeather.set("nt_rain", nt_rain) 
mapWeather.set("lightning", lightning) 
mapWeather.set("tstorm", tstorm) 
mapWeather.set("offline", errorLoadImageWeather) 

console.log(typeof mapWeather)

export {mapWeather}