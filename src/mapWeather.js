import overcast from "../dist/assets/svg/weather/overcast.svg"
import nt_overcast from "../dist/assets/svg/weather/nt_overcast.svg"
import partlycloudyfew from "../dist/assets/svg/weather/partlycloudyfew.svg"
import nt_partlycloudyfew from "../dist/assets/svg/weather/nt_partlycloudyfew.svg"
import partlycloudy from "../dist/assets/svg/weather/partlycloudy.svg"
import nt_partlycloudy from "../dist/assets/svg/weather/nt_partlycloudy.svg"
import clear from "../dist/assets/svg/weather/clear.svg"
import nt_clear from "../dist/assets/svg/weather/nt_clear.svg"
import fog from "../dist/assets/svg/weather/fog.svg"
import nt_fog from "../dist/assets/svg/weather/nt_fog.svg"
import haze from "../dist/assets/svg/weather/haze.svg"
import nt_haze from "../dist/assets/svg/weather/nt_haze.svg"
import flurries from "../dist/assets/svg/weather/flurries.svg"
import nt_flurries from "../dist/assets/svg/weather/nt_flurries.svg"
import sleet from "../dist/assets/svg/weather/sleet.svg"
import nt_sleet from "../dist/assets/svg/weather/nt_sleet.svg"
import snow from "../dist/assets/svg/weather/snow.svg"
import nt_snow from "../dist/assets/svg/weather/nt_snow.svg"
import chancesnow from "../dist/assets/svg/weather/chancesnow.svg"
import nt_chancesnow from "../dist/assets/svg/weather/nt_chancesnow.svg"
import chancerain from "../dist/assets/svg/weather/chancerain.svg"
import nt_chancerain from "../dist/assets/svg/weather/nt_chancerain.svg"
import rain from "../dist/assets/svg/weather/rain.svg"
import nt_rain from "../dist/assets/svg/weather/nt_rain.svg"
import lightning from "../dist/assets/svg/weather/lightning.svg"
import tstorm from "../dist/assets/svg/weather/tstorm.svg"
import errorLoadImageWeather from "../dist/assets/svg/weather/offline.svg"

let weatherMap = [
    {
      "weatherCode": [
        {
          "code": 200
        },
        {
          "code": 201
        },
        {
          "code": 202
        }
      ], 
     "images": [
        {
         "timeCode": 1,
         "svg": tstorm
        },
        {
         "timeCode": 2, 
         "svg": tstorm
        }
    ]
    },      
    {
     "weatherCode": [
        {
          "code": 230
        },
        {
         "code": 231
        },
        {
         "code": 232
        },
        {
         "code": 233
        }
      ], 
     "images": [
        {
         "timeCode": 1,
         "svg": lightning
        },
        {
         "timeCode": 2, 
         "svg": lightning
        }
    ]
    },      
    {
     "weatherCode": [
        {
         "code": 300
        },
        {
         "code": 301
        },
        {
         "code": 302
        },
        {
         "code": 623
        }
      ], 
     "images": [
        {
         "timeCode": 1,
         "svg": flurries
        },
        {
         "timeCode": 2, 
         "svg": nt_flurries
        }
    ]
    },     
    {
     "weatherCode": [
        {
         "code": 500
        },
        {
         "code": 501
        },
        {
         "code": 502
        },
        {
         "code": 511
        },
        {
         "code": 520
        },
        {
         "code": 522
        }
      ], 
     "images": [
        {
         "timeCode": 1,
         "svg": rain
        },
        {
         "timeCode": 2, 
         "svg": nt_rain
        }
    ]
    },          

    {
     "weatherCode": [
        {
         "code": 521
        }
      ],          
     "images": [
        {
         "timeCode": 1,
         "svg": chancerain
        },
        {
         "timeCode": 2, 
         "svg": nt_chancerain
        }
    ]
    },
    
    {
     "weatherCode": [
        {
         "code": 600
        },
        {
         "code": 610
        },
        {
         "code": 621
        }
      ],          
     "images": [
        {
         "timeCode": 1,
         "svg": chancesnow
        },
        {
         "timeCode": 2, 
         "svg": nt_chancesnow
        }
    ]
    },
    {
     "weatherCode": [
        {
         "code": 601
        },
        {
         "code": 602
        },
        {
         "code": 622
        }
      ], 
     "images": [
        {
         "timeCode": 1,
         "svg": snow
        },
        {
         "timeCode": 2, 
         "svg": nt_snow
        }
    ]
    },         
    {
     "weatherCode": [
        {
         "code": 611
        },
        {
         "code": 612
        }
      ], 
     "images": [
        {
         "timeCode": 1,
         "svg": sleet
        },
        {
         "timeCode": 2, 
         "svg": nt_sleet
        }
    ]
    },          
    {
     "weatherCode": 721, 
     "images": [
        {
         "timeCode": 1,
         "svg": haze
        },
        {
         "timeCode": 2, 
         "svg": nt_haze
        }
    ]
    },
    {
     "weatherCode": [
        {
         "code": 700
        },
        {
         "code": 711
        },
        {
         "code": 731
        },
        {
         "code": 741
        },
        {
         "code": 751
        }
      ],  
     "images": [
        {
         "timeCode": 1,
         "svg": fog
        },
        {
         "timeCode": 2, 
         "svg": nt_fog
        }
    ]
    },     
    {
     "weatherCode": [
        {
         "code": 800
        }
      ],  
     "images": [
        {
         "timeCode": 1,
         "svg": clear
        },
        {
         "timeCode": 2, 
         "svg": nt_clear
        }
    ]
    },
    {
     "weatherCode": [
        {
         "code": 801
        },
        {
         "code": 802
        }
      ],  
     "images": [
        {
         "timeCode": 1,
         "svg": partlycloudy
        },
        {
         "timeCode": 2, 
         "svg": nt_partlycloudy
        }
    ]
    },     
    {
     "weatherCode": [
        {
         "code": 803
        }
      ],           
     "images": [
        {
         "timeCode": 1,
         "svg": partlycloudyfew
        },
        {
         "timeCode": 2, 
         "svg": nt_partlycloudyfew
        }
    ]
    },
    {
     "weatherCode": [
        {
         "code": 804
        }
      ], 
     "images": [
        {
         "timeCode": 1,
         "svg": overcast
        },
        {
         "timeCode": 2, 
         "svg": nt_overcast
        }
    ]
    },
    {
     "weatherCode": 900, 
     "images": [
        {
         "timeCode": 1,
         "svg": errorLoadImageWeather
        },
        {
         "timeCode": 2, 
         "svg": errorLoadImageWeather
        }
    ]
    }     
  ]

console.log(weatherMap)

  export {weatherMap}