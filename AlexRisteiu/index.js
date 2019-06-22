   

var x = document.getElementById("map_img");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var keyGoogleApi = "AIzaSyCdGcSBFqiWpAzJY0IfVd8KhFAGmgEuQvU";
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center= "+latlon+"&zoom=14&size=400x300&sensor=false&key="+keyGoogleApi+"";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"' >";    
    
}