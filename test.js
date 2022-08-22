
function a(){
   alert("Your products detasils ");

navigator.geolocation.getCurrentPosition(p);
function p(aa){console.log(aa);
    
  
    
    document.getElementsByClassName("gps")[0].innerHTML="Latitude "+aa.coords.latitude+ " "+"Longitude "+ aa.coords.longitude;
document.getElementsByClassName("sec")[0].style.display="inline";

var api_key = '1a193a1cc65d40b5b27203293c21a68b';
 

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'
  var latitude = aa.coords.latitude;
  var longitude = aa.coords.longitude;
  var request_url = api_url
    + '?'
    + 'key=' + api_key
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
    + '&no_annotations=1';

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200){
      // Success!
      var data = JSON.parse(request.responseText);
      alert(data.results[0].formatted); // print the location
document.getElementsByTagName("input")[0].placeholder=data.results[0].formatted;
    } else if (request.status <= 500){
      // We reached our target server, but it returned an error

      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log('error msg: ' + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("unable to connect to server");
  };

  request.send();  // make the request

}}




