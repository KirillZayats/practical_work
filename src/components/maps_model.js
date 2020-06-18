export default function initMap(latitude, longitude) {      
    var mapProp= {
      center:new google.maps.LatLng(latitude, longitude),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
  }
  window.initMap = initMap;