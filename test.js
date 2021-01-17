const OpenWeatherMapHelper = require('openweathermap-node');
const helper = new OpenWeatherMapHelper(
    {
        APPID: 'ff1debf4f938c17b705e90031828ecb5',
        units: "imperial"
    }
);

helper.getCurrentWeatherByGeoCoordinates(26, 80, (err, currentWeather) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(currentWeather);
    }
});