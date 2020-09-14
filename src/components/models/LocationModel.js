import { events } from "../../constants/constants";
import Observer from "../../observers/Observer";
import {languageMap} from "../../mapLeanguage"

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
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          resolve([data.coords.latitude, data.coords.longitude]);
        },
        (err) => {
          resolve([53.9, 27.56])
        }
      );
    });
  };

  getLocation = async () => {
    const position = await this.getCurrentPosition();
    this.coords.lat = position[0]
    this.coords.lon = position[1]
    this.observer.broadcast(events.loadLocation, this.coords);
    return this.coords;
  };

  getLocationByNameCity = async(searchBox, message) => {
    try {

      var place = searchBox.getPlace();
      console.log(languageMap.statusLanguage)
      if(message == "") {
        throw this.getMessageError(languageMap.statusLanguage, languageMap.messageErrorEmpty)
      }
      else if (typeof place == "undefined") {
        throw this.getMessageError(languageMap.statusLanguage, languageMap.messageErrorSetMap)
      }
      else if( place.formatted_address == this.pastPlaceAdress && this.pastMessage != message) {
        throw this.getMessageError(languageMap.statusLanguage, languageMap.messageErrorSetMap)
      }
      else {
        this.coords.lat =  place.geometry.location.lat()
        this.coords.lon = place.geometry.location.lng()
        this.pastPlaceAdress = place.formatted_address
        this.pastMessage = message
        this.observer.broadcast(events.loadLocationByCity, this.coords);
      }
    }
    catch(e) {
      return e
    }
    return this.coords
  }

  getMessageError(language, map) {
    let messageError = ''
    for (let index = 0; index < map.length; index++) {
      if(map[index].name == language) {
        messageError = map[index].value
      } 
    }
    return messageError
  }

  getMessage = async(message) => { 
    this.observer.broadcast(events.viewErrorMessage, message);
    return message
  }

  getInfoLocation(places, markers, bounds, map) {
    let info = [3]
    places.forEach(function(place) {
      if (!place.geometry) {
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
