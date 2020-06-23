import './styles/style.scss';
import './components/view/LocationView.js';
import TemperatureView from './components/view/TemperatureView.js';

console.log("connection app file");

class App {
    render() {
        this.temperatures = document.querySelectorAll("#number_temperature_1, #number_temperature_2, #number_temperature_3, #number_temperature_4");
        this.temperatureView = new TemperatureView(this.temperatures)
        this.temperatureView.render()
    }
}
let app = new App()
app.render()



    

