const mongo = require("mongoose");
const log = require('../logger/');

const connection = (URI) => {

    mongo.connect(`${URI}`, {
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
}

module.exports = connection;