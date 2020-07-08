import { events } from "../../constants/constants";
import Observer from "../../observers/Observer";

export default class LocationModel {
  /**
   * 
   * @param {Object} params
   * @param {Observer} params.observer 
   */
  constructor({ observer }) {
    this.observer = observer;
    this.coords = {
      "lat" : 1,
      "lon" : 1
    }
  }

  getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };

  getLocation = async () => {
    const position = await this.getCurrentPosition();
    this.coords.lon = position.coords.longitude
    this.coords.lat = position.coords.latitude
    this.observer.broadcast(events.loadLocation, this.coords);
    return this.coords;
  };

  getLocationByNameCity = async(searchBox, map) => {
    var markers = [];

    var place = searchBox.getPlace();
    this.coords.lat =  place.geometry.location.lat()
    this.coords.lon = place.geometry.location.lng()
    this.observer.broadcast(events.loadLocationByCity, this.coords);

    return this.coords
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
