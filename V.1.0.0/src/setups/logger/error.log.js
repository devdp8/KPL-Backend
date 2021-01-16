const { errorPino } = require(".")

const error = (data, pino) => {
    pino.error(data);
}

module.exports = error;