
//jshint esversion: 6

const img = document.getElementById('img');
url = img.src;
requestCORSIfNotSameOrigin(img, url);
img.src = url;

// Load the model.
mobilenet.load().then(model => {
  model.classify(img).then(predictions => {
    console.log('Predictions Class: '+ predictions[0].className);
    console.log('Predictions proba: '+ predictions[0].probability);
  });
});
//to overcome cors error, calling function and the line 10,11,12 are also used to overcome CORS
function requestCORSIfNotSameOrigin(img, url) {
  if ((new URL(url)).origin !== window.location.origin) {
    img.crossOrigin = ""; //this requests permission from the server
  }
}
