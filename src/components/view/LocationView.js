import {coordinates} from "../model/CoordinatesModel.js";
// import loadMap  from '../model/MapsModel.js';
// import getWeather from '../model/WeatherModel.js'
import LocationController from "../controller/LocationController.js";


console.log("connection location_view")

export default class LocationView {
  constructor() {
    this.locationController = new LocationController()

  }

  handleClick(searchBox, map) {
    var model = this.locationController.updateMapController(searchBox, map)

    // console.log(message)
    document.getElementById('get_latitude').innerHTML = "Latitude: " + model.lat;
    document.getElementById("get_longitude").innerHTML = "Longitude: " + model.lon;
    document.getElementById("city").innerHTML = model.city;
  }

  render() {
    var input = document.getElementById('pac-input');
    this.searchBox = new google.maps.places.SearchBox(input);
    this.locationController.getCoodinationController()
 
    var map = this.locationController.getMapController(this.searchBox)  

    document.getElementById("get_location_usind_address").addEventListener("click", this.handleClick.bind(this, this.searchBox, map))
    // document.getElementById('get_latitude').innerHTML = "Latitude " + coord[0];
    // document.getElementById("get_longitude").innerHTML = "Longitude " +coord[1];
  }
}

// navigator.geolocation.getCurrentPosition(showInfo, error, options);

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// function showInfo(position){ 
//  coordinates.latitude = position.coords.latitude.toFixed(4); 
//  coordinates.longitude = position.coords.longitude.toFixed(4);
//  console.log(position)
//   document.getElementById('get_latitude').innerHTML = "Latitude " + coordinates.latitude;
//   document.getElementById("get_longitude").innerHTML = "Longitude " +coordinates.longitude;
//   loadMap();
//   getWeather(coordinates.latitude, coordinates.longitude);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// };   

// console.log("RRRRRRRRRRRRR")


// // getlocation()

// function initiate(){
//   console.log("RRRRRRRRRRRRR")

//   var get=document.getElementById('get_location_usind_address'); 
//   get.addEventListener('click', load_map(), false);

// }
// window.addEventListener('', initiate, false);

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// function getlocation(){
//    navigator.geolocation.getCurrentPosition(showinfo, error, options);

// }

// function showinfo(position){ 
//   var latitude = position.coords.latitude.toFixed(4); 
//   var longitude = position.coords.longitude.toFixed(4);
//   document.getElementById('get_latitude').innerHTML = "Latitude " +  latitude;
//   document.getElementById("get_longitude").innerHTML = "Longitude " + longitude;
//   load_map(latitude, longitude)
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// };   
// window.addEventListener('load', initiate, false);
