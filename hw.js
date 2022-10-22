// Get the API key from openweathermap.org

var apiKey = '03318390262ec63918aa9c84f1529e02';

// Get the current weather for the location

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Your_Location&APPID=' + apiKey,

  dataType: 'json',

  success: function(data) {

    console.log('Current weather:');

    console.log(data);

  }

});

// Get the forecast for the location

$.ajax({

  url: 'http://api.openweathermap.org/data/2.5/forecast?q=Your_Location&APPID=' + apiKey,

  dataType: 'json',

  success: function(data) {

    console.log('Forecast:');

    console.log(data);

  }

});
