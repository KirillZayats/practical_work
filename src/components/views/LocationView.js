import {events, selectors} from "../../constants/constants";
import AppController from "../../AppController";


export default class LocationView {
    constructor({parentDom, controller, observer}) {
        this.parentDom = parentDom;
        this.observer = observer;
        this.controller = controller;
        this.appController = new AppController(this.observer);
        this.observer.subscribe(events.loadLocation, this.setDataLocation);
        this.observer.subscribe(events.loadLocationByCity, this.setDataLocationByCity);
        this.render();
    }

    /**
     * @param {Object} coords
     * @param {number} coords.latitude
     * @param {number} coords.longitude
     */
    setDataLocation = (coords) => {
        this.outputLocation(coords)
        this.setMap(coords)
    }

    setDataLocationByCity = (coords) => {
        this.outputLocation(coords)
        this.map.setCenter({lat: Number(coords.lat), lng: Number(coords.lon)})
        this.map.setZoom(10)
    }

    outputLocation = (coords) => {
        this.longitude.innerText = "Longitude: " + coords.lon.toFixed(4);
        this.latitude.innerText = "Latitude: " + coords.lat.toFixed(4);
    }

    setMap = (coords) => {
        this.map = new google.maps.Map(this.mapBlock, {
            center: {
              lat: Number(coords.lat),
              lng: Number(coords.lon)
            },
            zoom: 15,
            mapTypeId: 'roadmap'
          });

        var options = {
            types: ['(cities)'],
        };

        this.searchBox = new google.maps.places.Autocomplete(document.getElementById('pac-input'), options);

        this.map.addListener('bounds_changed', function() {
            this.searchBox.setBounds(this.map.getBounds());
         }.bind(this)); 
    }

    handleUpdateValues = () => {
        this.appController.loadDataByCity(this.searchBox, this.map)
    } 

    handleUpdateValuesWithMicro = () => {
        if(this.checkmicro) {
            this.checkmicro = false
            console.log("No")
            this.recognition.abort()            
        }
        else {
            this.checkmicro = true
            console.log("Yes")

            this.recognition.start();
      
            this.recognition.onresult = function(el) {
                console.log("RRRRRRRRRRRR")

              document.getElementById('pac-input').value = el.results[0][0].transcript;
                console.log(el.results)
                this.workMicro()
                this.checkmicro = false

                this.recognition.stop();

                
            }.bind(this);

            this.recognition.onend = function(el) {
                if(this.checkmicro) {
                    this.workMicro()
                    this.checkmicro = false
                }
                
            }.bind(this) 
            console.log(this.recognition)

        }
        
        this.workMicro()
      
          
    }

    workMicro() {
        this.micro.forEach((e) => {
            let sTemp = e.getAttribute('from');
            e.setAttribute('from', e.getAttribute('to'));
            e.setAttribute('to', sTemp);
            e.beginElement();
          });
    }

    render() {

        this.latitude = this.parentDom.querySelector(selectors.latitudeValue);
        this.longitude = this.parentDom.querySelector(selectors.longitudeValue);
        this.updateButton = this.parentDom.querySelector(selectors.locationButton);
        this.microphoneButton = this.parentDom.querySelector(selectors.microphone);
        this.updateButton.addEventListener("click", this.handleUpdateValues);
        this.microphoneButton.addEventListener("click", this.handleUpdateValuesWithMicro);

        this.mapBlock = this.parentDom.querySelector(selectors.map)


        this.micro = document.querySelectorAll(selectors.micro);
        this.checkmicro = false

        this.recognition = new webkitSpeechRecognition();
      
        this.recognition.continuous = false;
        this.recognition.interimResults = false;

        // if(btn.clicked == true)
        // {
        //     alert("button was clicked");
        // }

        // document.getElementById("pac-input").onkeypress = function(event){
        //     if (event.keyCode == 13 || event.which == 13){
        //         this.updateButton.click()
        //     }
        // };
        
        document.getElementById("pac-input").addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                this.updateButton.addEventListener('click', this.handleUpdateValues());

            }
        }.bind(this));
            
    }

      
}