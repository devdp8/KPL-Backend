const mongo = require("mongoose");
const log = require('../logger/');
const { usersSchema } = require('./model.setup');
const bcrypt = require('bcrypt-nodejs');
require('dotenv').config();

mongo.connect(`${process.env.mongoURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) {
        log(data = {
            'name': 'Error',
            'status': 501,
            'message': 'Connection To Mongo Failed',
            'statusCode': 501
        }, 'error');
    }
    else {
        log(data = {
            'name': 'success',
            'status': 201,
            'message': 'Connection To Mongo Established',
            'statusCode': 201
        }, 'success');
    }
});

const schema = mongo.Schema(usersSchema);

module.exports = mongo.model('KPLusers', schema);