import {events, selectors} from "../../constants/constants";
// import folder from "../../../dist/assets/svg/weather/";

export default class LocationView {
    constructor({parentDom, controller, observer}) {
        this.parentDom = parentDom;
        this.observer = observer;
        this.controller = controller;
        this.observer.subscribe(events.locationUpdated, this.setDataLocation);
        this.render();
    }

    /**
     * @param {Object} coords
     * @param {number} coords.latitude
     * @param {number} coords.longitude
     */
    setDataLocation = (coords) => {
        this.longitude.innerText = "Longitude: " + coords.longitude.toFixed(4);
        this.latitude.innerText = "Latitude: " + coords.latitude.toFixed(4);
        console.log('update the location completed');
        this.setMap(coords)
    }

    setMap = (coords) => {
        var map = new google.maps.Map(this.map, {
            center: {
              lat: Number(coords.latitude),
              lng: Number(coords.longitude)
            },
            zoom: 15,
            mapTypeId: 'roadmap'
          });
    }

    handleUpdateValues = () => this.controller.getValuesLocation();

    render() {
        this.latitude = this.parentDom.querySelector(selectors.latitudeValue);
        this.longitude = this.parentDom.querySelector(selectors.longitudeValue);
        this.updateButton = this.parentDom.querySelector(selectors.locationButton);
        this.updateButton.addEventListener("click", this.handleUpdateValues);

        this.map = this.parentDom.querySelector(selectors.map)

        // var img = document.getElementById("image_weather_now");
        // img.src = image
        // const images = this.importAll(require.context("../../../dist/assets/svg/weather/", false, /\.(svg)$/));
        // console.log(images)
        // var img = document.getElementsByClassName("image_now_svg");
        // img.innerText = images[0]
    }

    importAll(r) {
        return r.keys().map(r);
      }
      
}