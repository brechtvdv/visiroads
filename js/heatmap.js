/* Data points defined as an array of LatLng objects */
var heatmapData = [
  new google.maps.LatLng(51.004930, 3.746079),
  new google.maps.LatLng(50.985483, 3.810624),
  new google.maps.LatLng(50.967325, 3.847703),
  new google.maps.LatLng(50.946996, 3.902635),
  new google.maps.LatLng(50.926659, 3.965119),
  new google.maps.LatLng(50.918435, 4.031724),
  new google.maps.LatLng(50.899384, 4.099702),
  new google.maps.LatLng(50.882059, 4.162873),
  new google.maps.LatLng(50.881626, 4.239777),
  new google.maps.LatLng(51.004930, 3.746079),
  new google.maps.LatLng(50.912807, 3.177537),
  new google.maps.LatLng(50.874694, 3.173417),
  new google.maps.LatLng(50.846955, 3.173417),
  new google.maps.LatLng(50.813994, 3.200883),
  new google.maps.LatLng(50.918435, 4.031724),
  new google.maps.LatLng(50.483103, 4.061936),
  new google.maps.LatLng(50.498830, 4.153947),
  new google.maps.LatLng(50.495335, 4.245957),
  new google.maps.LatLng(50.479608, 4.315995),
  new google.maps.LatLng(50.476986, 4.392899),
  new google.maps.LatLng(50.474364, 4.489030),
  new google.maps.LatLng(50.482230, 4.596146),
  new google.maps.LatLng(50.494462, 4.701890)
];

var brussel = new google.maps.LatLng(50.837850, 4.358567);

map = new google.maps.Map(document.getElementById('map'), {
  center: brussel,
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  disableDefaultUI: true,
  scrollwheel: false,
  draggable: false
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData,
  opacity: 2
});
heatmap.setMap(map);