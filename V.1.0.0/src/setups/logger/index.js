const pino = require('pino')();
const error = require('./error.log');
const success = require('./success.log');

const errorPino = (data) => {
    error(data, pino);
}

const successPino = (data) => {
    success(data, pino);
}

const log = (data, category) => {
    if(category == 'error'){
        errorPino(data);
    }
    else{
        successPino(data);
    }
}

module.exports =  log;