
console.log("model")
export  default class Coordinates {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    get_latitude() {
        return this.latitude;
    }

    get_longitude() {
        return this.longitude;
    }

}
