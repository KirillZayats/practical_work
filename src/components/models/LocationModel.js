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
    this.pastPlaceAdress = " "
    this.pastMessage = " "
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

  getLocationByNameCity = async(searchBox, message) => {
    try {

      var place = searchBox.getPlace();
      console.log(place)

      if(message == "") {
        throw "Поле ввода пустое. Введите название города!"
      }
      else if (typeof place == "undefined") {
        throw "Название города необходимо выбрать из предложенного списка!"
      }
      else if( place.formatted_address == this.pastPlaceAdress && this.pastMessage != message) {
        // console.log("Why")
        throw "Название города необходимо выбрать из предложенного списка!"
      }
      else {
        // alert("RRR")
        this.coords.lat =  place.geometry.location.lat()
        this.coords.lon = place.geometry.location.lng()
        this.pastPlaceAdress = place.formatted_address
        this.pastMessage = message
        // alert(this.pastMessage + "2")
        // alert(message + "2")
        this.observer.broadcast(events.loadLocationByCity, this.coords);
      }
    }
    catch(e) {
      return e
    }
    return this.coords
  }

  getMessage = async(message) => { 
    this.observer.broadcast(events.viewErrorMessage, message);
    return message
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
