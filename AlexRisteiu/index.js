

var x = document.getElementById("mapholder");


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
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center= "+latlon+"&zoom=16&size=400x300&scale=1&markers=color:pink%7Csize:normal%7C"+position.coords.latitude+","+position.coords.longitude+"&sensor=false&key="+keyGoogleApi+"";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"' class='img-fluid' >";    
    
}
function validateLocation(){
          
          var longi = parseFloat(document.getElementById("longi").value);
          var lati = parseFloat(document.getElementById("lati").value);
          console.log(longi + " + "+lati) ;
          
          if ((typeof lati === 'number' && lati >= -90 && lati <= 90 ) && (typeof longi === 'number' && longi >= -180 && longi <= 180 ))
              {
                 var latlon = lati + "," + longi;
                 var keyGoogleApi = "AIzaSyCdGcSBFqiWpAzJY0IfVd8KhFAGmgEuQvU";
                 var img_url = "https://maps.googleapis.com/maps/api/staticmap?center= "+latlon+"&zoom=13&size=400x300&scale=1&markers=color:pink%7Csize:normal%7C"+lati+","+longi+"&sensor=false&key="+keyGoogleApi+"";
                 document.getElementById("newMap").innerHTML = "<img src='"+img_url+"' class='img-fluid' >"; 
              }
          else{
                 
                 //datele introduse nu sunt corecte
                 document.getElementById("errorInput").innerHTML = "Datele introduse NU sunt corecte , pagina se va reincarca in 5 secunde";
                 setTimeout("location.href = 'index.html'",5000);
              }
      }
