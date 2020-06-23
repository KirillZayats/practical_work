import {coordinates} from "./CoordinatesModel.js"
export default class LocationModel {
  constructor() {
    this.map;
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
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.showInfo, this.error, options);
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: Number(coordinates.latitude),
        lng: Number(coordinates.longitude)
      },
      zoom: 15,
      mapTypeId: 'roadmap'
    });

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

            // Create the search box and link it to the UI element.

        
    //         // Bias the SearchBox results towards current map's viewport.
    // this.map.addListener('bounds_changed', function() {
    //   searchBox.setBounds(this.map.getBounds());
    // });
  }

  // updateMap() {
  //   var markers = [];

  //   // Listen for the event fired when the user selects a prediction and retrieve
  //   // more details for that place.
  //   var places = searchBox.getPlaces();
  //   console.log(places)

  //   if (places.length == 0) {
  //     return;
  //   }

  //   // Clear out the old markers.
  //   markers.forEach(function(marker) {
  //     marker.setMap(null);
  //   });
  //   markers = [];

  //   // For each place, get the icon, name and location.
  //   var bounds = new google.maps.LatLngBounds();
  //   places.forEach(function(place) {
  //     if (!place.geometry) {
  //       console.log("Returned place contains no geometry");
  //       return;
  //     }
  //     let message = new Array("Latitude: " +  place.geometry.location.lat().toFixed(4), "Longitude: " + place.geometry.location.lng().toFixed(4))
  //     // document.getElementById('get_latitude').innerHTML = "Latitude: " +  place.geometry.location.lat().toFixed(4)
  //     // document.getElementById("get_longitude").innerHTML = "Longitude: " + place.geometry.location.lng().toFixed(4)
  //     console.log(place.formatted_address)
  //     document.getElementById("city").innerHTML = place.formatted_address
  //     getWeather(place.geometry.location.lat().toFixed(4), place.geometry.location.lng().toFixed(4));

  //     // Create a marker for each place.
  //     markers.push(new google.maps.Marker({
  //       map: map,
  //       title: place.name,
  //       position: place.geometry.location,
  //     }));


  //     if (place.geometry.viewport) {
  //       // Only geocodes have viewport.
  //       bounds.union(place.geometry.viewport);
  //     } else {
  //       bounds.extend(place.geometry.location);
  //     }
  //   });
  //   map.fitBounds(bounds);
  //   return message
  // }
}



