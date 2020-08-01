import {events, selectors} from "../../constants/constants";
import AppController from "../../AppController";
import {languageMap} from "../../mapLeanguage"

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

        this.addInfoAboutCoordination("locationBlock", "latitude", coords.lat.toFixed(4))
        this.addInfoAboutCoordination("locationBlock", "longitude", coords.lon.toFixed(4))

        this.getValueMapLanguage("searchBlock", "locationBlock")

    }

    addInfoAboutCoordination(globalBlockName, blockName, data) {
      
      for (let index = 0; index < languageMap.globalBlocks.length; index++) {
        if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
          for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
            if(languageMap.globalBlocks[index].blocks[j].nameBlock == blockName) {
              for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                if (languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ").length != 2) {
                  languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value + " " + data
                }
                if(languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ")[1] != data) {
                  languageMap.globalBlocks[index].blocks[j].language[k].value = languageMap.globalBlocks[index].blocks[j].language[k].value.split(" ")[0] + " " + data
                }
                
              }         
            }
          }
        }  
      }
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
        this.textFieldSearch = this.parentDom.querySelector(selectors.textFieldSearch);
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

        this.mapSearchButton = new Map()
        this.mapSearchButton.set("searchButton", this.updateButton)

        this.mapSearchField = new Map()
        this.mapSearchField.set("searchField", this.textFieldSearch)

        this.mapDataLocation = new Map()
        this.mapDataLocation.set("latitude", this.latitude)
        this.mapDataLocation.set("longitude", this.longitude)

        
        document.getElementById("pac-input").addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                this.updateButton.addEventListener('click', this.handleUpdateValues());
            }
        }.bind(this));


        this.changeLanguagesButton = document.getElementById("change_leanguage")
        this.changeLanguagesButton.addEventListener("change", this.changeLanguages.bind(this))
            
    }

    changeLanguages() {
      languageMap.statusLanguage = this.changeLanguagesButton.options[this.changeLanguagesButton.selectedIndex].value.toLowerCase()
      this.getValueMapLanguage("searchBlock", "locationBlock")
    }

    getValueMapLanguage(firstBlock, secondBlock) {
      this.getValues(firstBlock, this.mapSearchField, this.usePlaceHolder)
      this.getValues(firstBlock, this.mapSearchButton, this.useInnerText)
      this.getValues(secondBlock, this.mapDataLocation, this.useInnerText)
    }

    getValues(globalBlockName, map, func) {
      for (var [key, value] of map) {
        for (let index = 0; index < languageMap.globalBlocks.length; index++) {
          if(languageMap.globalBlocks[index].namebBlock == globalBlockName) {
            for (let j = 0; j < languageMap.globalBlocks[index].blocks.length; j++) {
              if(languageMap.globalBlocks[index].blocks[j].nameBlock == key) {
                for (let k = 0; k < languageMap.globalBlocks[index].blocks[j].language.length; k++) {
                  if(languageMap.globalBlocks[index].blocks[j].language[k].name == languageMap.statusLanguage) {
                    func(value, index, j, k)
                  }
                }
              }         
            }
          }
          
        }      
      }
    } 

    useInnerText(value, i, j, k) {
      value.innerText = languageMap.globalBlocks[i].blocks[j].language[k].value 
    }

    usePlaceHolder(value, i, j, k) {
      console.log(value)
      value.placeholder = "RRRRR"
      value.placeholder = languageMap.globalBlocks[i].blocks[j].language[k].value 
    }
      
}