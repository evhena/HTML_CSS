$("a[href='#bottom']").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});

function initialize() {
 var myLatlng = new google.maps.LatLng(53.3333,-3.08333),
 mapOptions = {
 zoom: 11,
 center: myLatlng,
 mapTypeId: google.maps.MapTypeId.ROADMAP
 }
var map = new google.maps.Map(document.getElementById('map'), mapOptions),
contentString = 'Some address here..',
infowindow = new google.maps.InfoWindow({
 content: contentString,
 maxWidth: 500
});

var marker = new google.maps.Marker({
 position: myLatlng,
 map: map
});

var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, 
{"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, 
{"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, 
{"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, 
{"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]},
{"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, 
{"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": 
[{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"},
 {"lightness": -25}, {"saturation": -97}]}];

map.set('styles', styles);

google.maps.event.addListener(marker, 'click', function() {
 infowindow.open(map,marker);
});

google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center);
 });
}

google.maps.event.addDomListener(window, 'load', initialize);

