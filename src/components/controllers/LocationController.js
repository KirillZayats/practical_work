export default class LocationController {
    constructor(model) {
        this.model = model;
    }

    getValuesLocation () {
        console.log('update the location called');
        this.model.getLocation();
    }

}