import {coordinates} from "./coordinates_model.js"
import getWeather from './weather_model.js'


// export default function initMap(latitude, longitude) {    
  
//     var mapProp= {
//       center:new google.maps.LatLng(latitude, longitude),
//       zoom:15,
//     };
//     map = new google.maps.Map(document.getElementById("map"),mapProp);

//     new google.maps.Geocoder().geocode({
//         'latLng': new google.maps.LatLng(12.9715987, 77.594562699)
//       }, function(results, status) {
//           console.log(results)
//                   if (status == google.maps.GeocoderStatus.OK) {
//           console.log(results);
//         }
//       });  
//     }


//   window.initMap = initMap;

export default function initAutocomplete() {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: Number(coordinates.latitude),
        lng: Number(coordinates.longitude)
      },
      zoom: 15,
      mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        document.getElementById('get_latitude').innerHTML = "Latitude " +  place.geometry.location.lat().toFixed(4)
        document.getElementById("get_longitude").innerHTML = "Longitude " + place.geometry.location.lng().toFixed(4)
        document.getElementById("city").innerHTML = place.formatted_address
        getWeather(place.geometry.location.lat().toFixed(4), place.geometry.location.lng().toFixed(4));

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          title: place.name,
          position: place.geometry.location,
        }));


        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }

//   function processButtonSearch(location) {
//     geocoder = new google.maps.Geocoder();
//     geocoder.geocode(location, function (data) {
//       var lat = data[0].geometry.location.lat();
//       var lng = data[0].geometry.location.lng();
//       var origin = new google.maps.LatLng(lat, lng);
//       console.log(origin)
//       // plot origin
//     });
//   }

// var button = document.getElementById(document.getElementById('pac-input'););
// var searchbox = document.getElementById(input);

// button.onclick = function () {
//   var location = searchbox.value
//   processButtonSearch(location);
// }



