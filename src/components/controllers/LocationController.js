export default class LocationController {
    constructor(model) {
        this.model = model;
    }

    getValuesLocation () {
        console.log('update the location called');
        this.model.getLocation();
    }

    getValuesLocationByNameCity(searchBox, map) {  
       return this.model.getLocationByNameCity(searchBox, map)
    }

}