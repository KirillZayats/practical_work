import controller from "./location_controller.js";
import coordinates from "./coordinates_model.js";
import load_map  from './maps_model.js';

console.log("connection location_view 1")

getlocation()

function initiate(){
  var get=document.getElementById('getlocation'); 
  get.addEventListener('click', getlocation, false);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function getlocation(){
   navigator.geolocation.getCurrentPosition(showinfo, error, options);

}

function showinfo(position){ 
  var latitude = position.coords.latitude.toFixed(4); 
  var longitude = position.coords.longitude.toFixed(4);
  document.getElementById('get_latitude').innerHTML = "Latitude " +  latitude;
  document.getElementById("get_longitude").innerHTML = "Longitude " + longitude;
  load_map(latitude, longitude)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};   
window.addEventListener('load', initiate, false);
