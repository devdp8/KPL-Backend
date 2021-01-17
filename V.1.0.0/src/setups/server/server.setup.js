const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connection, tab } = require('../dbSetup/mongo.setup');
const mysql = require('../dbSetup/mysql.setup');
const routes = require('../../routes');
const versionMonitor = require('../../versionMonitor');
const log = require('../logger');
const login = require('../../validators/loginValidation/login');
require('dotenv').config();

const setup = (uuid) => {

    log(data = {
        'name': 'UUID Checking',
        'currentUUID':uuid,
        'status': 201,
        'message': 'UUID Mapped With Server Run',
        'statusCode': 201
    }, 'Success');

    const app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/login', login);
    app.use('/routes', routes);
    app.use('/healthCheck', require('express-healthcheck')({
        healthy: function () {
            log(data = {
                'name': 'success',
                'status': 201,
                'message': 'Health Info Fetched Successfully',
                'statusCode': 201
            }, 'success');
            return {
                uptime: `${process.uptime()/60} minutes`,
                everything: 'is ok'
            };
        }
    }));
    app.use('/version', versionMonitor);

    app.use(function (req, res) {
        log(data = {
            'name': 'Error',
            'status': 404,
            'message': 'Invalid Route Request',
            'statusCode': 404
        }, 'error');

        res.send({
            error: {
                'name': 'Error',
                'status': 404,
                'message': 'Invalid Route Request',
                'statusCode': 404
            },
            message: 'Testing!'
        });
    });

    app.listen(3000);
}

module.exports = setup;