/**
 * Created by Muhammad Umer on 2/8/2017.
 */
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX35FUpehnjXVjSVufX7FBYUAFeWhZnWY&callback=initMap">
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}