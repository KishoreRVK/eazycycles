function initialize_map() {
        var mapDiv = document.getElementById('map_container');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 28.7041, lng: 77.1025},
            zoom: 10
        });
}
var markerlocations = [
 [26.846694, 80.946166, 'Cloudy Sunny', 'icons/cloudysunny.png'],
 [28.613939, 77.209021, 'Rainy', 'icons/rainy.png'],
 [32.7218, 74.8577, 'Snowy', 'icons/snowy-2.png'],
 [23.259933, 77.412615, 'Thunderstorm', 'icons/thunderstorm.png'],
 [23.610181, 85.279935, 'Sunny', 'icons/sunny.png'],
 [22.986757, 87.854976, 'Storm', 'icons/storm.png'],
];
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(markerlocations[i][0], markerlocations[i][1]),
      map: map,
      icon:  markerlocations[i][3]
});
var infowindow = new google.maps.InfoWindow({
 content: address
});
