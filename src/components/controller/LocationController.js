import LocationModel from "../model/LocationModel.js"

export default class LocationControllet {
    constructor() {
        this.locationModel = new LocationModel()
    }

    getCoodinationController() {
        this.locationModel.getLocation()
    }

    getMapController() {
        this.locationModel.initMap()
    }

    updateMapController() {
        return this.locationModel.updateMap()
    }

}

 