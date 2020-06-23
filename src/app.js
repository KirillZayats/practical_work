import './styles/style.scss';
import './components/view/LocationView.js';
import TemperatureView from './components/view/TemperatureView.js';
import LocationView from './components/view/LocationView.js';

console.log("connection app file");

class App {
    render() {
        this.locationView = new LocationView()
        this.locationView.render()
        this.temperatureView = new TemperatureView()
        this.temperatureView.render()
    }
}
let app = new App()
app.render()



    

