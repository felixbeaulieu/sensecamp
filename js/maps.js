function initialize() {
  var map = new GMap2(document.getElementById("map_canvas"));
  map.setCenter(new GLatLng(52.496871, 13.412520), 15);
  map.setMapType(G_NORMAL_MAP);
  
  var point = new GLatLng(52.496871, 13.412520);
  map.addOverlay(new GMarker(point));
  }