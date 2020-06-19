import controller from "../controller/location_controller.js";
import {coordinates} from "../model/coordinates_model.js";
import load_map  from '../model/maps_model.js';

console.log("connection location_view")

navigator.geolocation.getCurrentPosition(showInfo, error, options);

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function showInfo(position){ 
 coordinates.latitude = position.coords.latitude.toFixed(4); 
 coordinates.longitude = position.coords.longitude.toFixed(4);
  document.getElementById('get_latitude').innerHTML = "Latitude " + coordinates.latitude;
  document.getElementById("get_longitude").innerHTML = "Longitude " +coordinates.longitude;
  load_map();
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};   

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
