const log = require('../logger');
const {machineMaster, machineBreakdown, feedUnavailable, defectDetails, ctrMaster, workerUnavailable, workerShiftDetails, stitchingSchedule} = require('./mysqlModel.setup');
const mysql = require("mysql");

require("dotenv").config();

const mysqlConn = mysql.createConnection({
    host: process.env.mysqlHost,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

mysqlConn.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        writeQuery(`create table if not exists machineMaster(${machineMaster})`);
        writeQuery(`create table if not exists machineBreakdown(${machineBreakdown})`);
        writeQuery(`create table if not exists feedUnavailable(${feedUnavailable})`);
        writeQuery(`create table if not exists defectDetails(${defectDetails})`);
        writeQuery(`create table if not exists ctrMaster(${ctrMaster})`);
        writeQuery(`create table if not exists workerUnavailable(${workerUnavailable})`);
        writeQuery(`create table if not exists workerShiftDetails(${workerShiftDetails})`);
        writeQuery(`create table if not exists stitchingSchedule(${stitchingSchedule})`);
        log(data = {
            'name': 'success',
            'status': 201,
            'message': 'mysql connected',
            'statusCode': 201
        }, 'success');
    }
});

const WQuery = (query) => {
    return new Promise((res, rej) => {
        mysqlConn.query(query, function (err, result, fields) {
            if (err) {
                log(data = {
                    'name': 'error',
                    'status': 304,
                    'message': `error occured while updating ${err}`,
                    'statusCode': 304
                }, 'error');
                rej("error occured");
            }
            else {
                log(data = {
                    'name': 'success',
                    'status': 201,
                    'message': 'update query successfully completed',
                    'statusCode': 201
                }, 'success');
                res("successfully updated");
            }
        });
    });
}

const RQuery = (query) => {
    return new Promise((res, rej) => {
        mysqlConn.query(query, function (err, result, fields) {
            if (err) {
                log(data = {
                    'name': 'error',
                    'status': 304,
                    'message': `error occured while reading ${err}`,
                    'statusCode': 304
                }, 'error');
                rej("error occured");
            }
            else {
                log(data = {
                    'name': 'success',
                    'status': 201,
                    'message': 'read query successfully completed',
                    'statusCode': 201
                }, 'success');
                res(result);
            }
        });
    });
}

async function readQuery(query){
    log(data = {
        'name': 'ReadQuery',
        'message': `${query}`
    }, 'success');
    const writeData = await RQuery(query);
    return writeData;
}

async function writeQuery(query){
    log(data = {
        'name': 'writeQuery',
        'message': `${query}`
    }, 'success');
    const writeData = await WQuery(query);
    return writeData;
}

module.exports = {readQuery, writeQuery}