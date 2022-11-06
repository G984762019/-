mapboxgl.accessToken = 'pk.eyJ1IjoidGF0c3VmdW1pIiwiYSI6ImNsYTVibDdjbzBrbTczd21sZmVoaWtncGwifQ.rN3WCG5L6OB8Z6uuRQZalg';


navigator.geolocation.getCurrentPosition(function (position) { // 現在地取得
    var lng = position.coords.longitude;
    var lat = position.coords.latitude;
    mapView(lng, lat);
});

function mapView(lng, lat) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 15
    });
}