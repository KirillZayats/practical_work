export default class LocationController {
    constructor(model) {
        this.model = model;
    }

    getValuesLocation () {
        this.model.getLocation();
    }

    getValuesLocationByNameCity(searchBox, map) {  
       return this.model.getLocationByNameCity(searchBox, map)
    }

}