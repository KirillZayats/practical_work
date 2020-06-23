import './styles/style.scss';
import './components/view/LocationView.js';
import TemperatureView from './components/view/TemperatureView.js';

console.log("connection app file");

class App {
    render() {
        this.temperatureView = new TemperatureView()
        this.temperatureView.render()
    }
}
let app = new App()
app.render()



    

