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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
         {
          "timeYearCode": 1,
          "image": "winter,storm,day"
         },
         {
          "timeYearCode": 2,
          "image": "spring,storm,day"
        },
        {
          "timeYearCode": 3,
          "image": "summer,storm,day"
        },
        {
          "timeYearCode": 4,
          "image": "autumn,storm,day"
        }        
       ]     
      },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,storm,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,storm,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,storm,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,storm,night"
       }        
      ]
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,lightning,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,lightning,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,lightning,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,lightning,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,lightning,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,lightning,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,lightning,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,lightning,night"
       }        
      ]       }
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
         "svg": flurries
        }
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,flurries,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,flurries,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,flurries,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,flurries,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,flurries,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,flurries,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,flurries,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,flurries,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,rain,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,rain,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,rain,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,rain,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,rain,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,rain,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,rain,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,rain,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,chance-rain,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,chance-rain,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,chance-rain,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,chance-rain,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,chance-rain,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,chance-rain,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,chance-rain,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,chance-rain,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,chance-snow,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,chance-snow,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,chance-snow,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,chance-snow,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,chance-snow,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,chance-snow,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,chance-snow,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,chance-snow,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,snow,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,snow,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,snow,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,snow,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,snow,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,snow,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,snow,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,snow,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,sleet,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,sleet,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,sleet,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,sleet,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,sleet,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,sleet,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,sleet,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,sleet,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,haze,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,haze,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,haze,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,haze,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,haze,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,haze,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,haze,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,haze,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,fog,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,fog,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,fog,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,fog,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,fog,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,fog,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,fog,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,fog,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,clear-sky,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,clear-sky,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,clear-sky,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,clear-sky,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,clear-sky,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,clear-sky,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,clear-sky,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,clear-sky,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,partly-cloudy,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,partly-cloudy,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,partly-cloudy,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,partly-cloudy,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,partly-cloudy,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,partly-cloudy,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,partly-cloudy,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,partly-cloudy,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,partly-cloudy-few,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,partly-cloudy-few,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,partly-cloudy-few,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,partly-cloudy-few,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,partly-cloudy-few,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,partly-cloudy-few,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,partly-cloudy-few,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,partly-cloudy-few,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,overcast,day"
        },
        {
         "timeYearCode": 2,
         "image": "spring,overcast,day"
       },
       {
         "timeYearCode": 3,
         "image": "summer,overcast,day"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,overcast,day"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "winter,overcast,night"
        },
        {
         "timeYearCode": 2,
         "image": "spring,overcast,night"
       },
       {
         "timeYearCode": 3,
         "image": "summer,overcast,night"
       },
       {
         "timeYearCode": 4,
         "image": "autumn,overcast,night"
       }        
      ]       }
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
    ],
    "imagesFont": [
      {
       "timeCode": 1,
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "error"
        },
        {
         "timeYearCode": 2,
         "image": "error"
       },
       {
         "timeYearCode": 3,
         "image": "error"
       },
       {
         "timeYearCode": 4,
         "image": "error"
       }        
      ]       },
      {
       "timeCode": 2, 
       "timeYear": [ 
        {
         "timeYearCode": 1,
         "image": "error"
        },
        {
         "timeYearCode": 2,
         "image": "error"
       },
       {
         "timeYearCode": 3,
         "image": "error"
       },
       {
         "timeYearCode": 4,
         "image": "error"
       }        
      ]       }
      ]
    }
         
  ]

  export {weatherMap}