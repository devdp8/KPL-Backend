const { compareSync } = require('bcrypt-nodejs');
const OpenWeatherMapHelper = require('openweathermap-node');
const log = require('../logger')

const getWeather = async (res) => {
    const helper = new OpenWeatherMapHelper(
        {
            APPID: 'ff1debf4f938c17b705e90031828ecb5',
            units: "imperial"
        }
    );
    await helper.getCurrentWeatherByGeoCoordinates(26, 80, async (err, currentWeather) => {
        if (err) {
            console.log(err);
        }
        else {
            const main = await currentWeather.main.temp;
            const finalTemp = await ((main - 273.15) * 9 / 5) + 32;
            const resTemp = await (finalTemp - 32) * (5 / 9);
            const data = {
                "date": new Date(),
                "time": new Date().toTimeString().split(" ")[0],
                "temperature": resTemp
            }
            res.send(data);
        }
    });
}

module.exports = getWeather;