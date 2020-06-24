import {coordinates} from "./CoordinatesModel.js"
export default class LocationModel {
  constructor() {
    this.lat = 0;
    this.lon = 0;
    this.city = "";   
  }

  showInfo(position){ 
    coordinates.latitude = position.coords.latitude.toFixed(4); 
    coordinates.longitude = position.coords.longitude.toFixed(4);
    document.getElementById('get_latitude').innerHTML = "Latitude: " + coordinates.latitude;
    document.getElementById("get_longitude").innerHTML = "Longitude: " + coordinates.longitude;
     // loadMap();
     // getWeather(coordinates.latitude, coordinates.longitude);
   }
   
   error(err) {
     console.warn(`ERROR(${err.code}): ${err.message}`);
   };

  getLocation() {
    
    var getPosition = function (options) {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    }
    
    getPosition()
      .then((position) => {
        this.lat = position.coords.latitude.toFixed(4); 
        this.lon = position.coords.longitude.toFixed(4);  
        return;    
      })
      .catch((err) => {
        console.error(err.message);
      });
    }

  initMap(searchBox) {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: Number(coordinates.latitude),
        lng: Number(coordinates.longitude)
      },
      zoom: 15,
      mapTypeId: 'roadmap'
    });

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    return map
  }

  updateMap(searchBox, map) {
    var markers = [];

    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    markers = this.clearOldMarkers(markers)
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    let info = this.getInfoLocation(places, markers, bounds, map)
    this.lat = info[0]
    this.lon = info[1]
    this.city = info[2]
  }

  getInfoLocation(places, markers, bounds, map) {
    let info = [3]
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      info[0] =  place.geometry.location.lat().toFixed(4)
      info[1] = place.geometry.location.lng().toFixed(4)
      info[2] = place.formatted_address

      markers.push(new google.maps.Marker({
        map: map,
        title: place.name,
        position: place.geometry.location,
      }));


      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);

    return info
  }

  clearOldMarkers(markers) {
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    return markers
  }
}



