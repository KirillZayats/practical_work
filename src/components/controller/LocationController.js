import LocationModel from "../model/LocationModel.js"

export default class LocationControllet {
    constructor() {
        this.locationModel = new LocationModel()
    }

    getCoodinationController() {
        this.locationModel.getLocation()
    }

    getMapController(searchBox) {
        return this.locationModel.initMap(searchBox)
    }

    updateMapController(searchBox, map) {
        this.locationModel.updateMap(searchBox, map)
        return this.locationModel
    }

}

 