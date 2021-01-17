const router = require('express').Router();
const admin = require('./admin');
const manager = require('./manager');
const supervisor = require('./supervisor');
// const OpenWeatherMapHelper = require('openweathermap-node');
// const log = require('../logger')
const getWeather = require('../setups/weather/weather.setup');

router.use('/admin', admin);
router.use('/manager', manager);
router.use('/supervisor', supervisor);
router.get('/weatherData', async (req, res) => {
    await getWeather(res);
});

module.exports = router;