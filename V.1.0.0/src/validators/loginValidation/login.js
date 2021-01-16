const userModel = require('../../setups/dbSetup/mongo.setup');
const log = require('../../setups/logger');
const router = require('express').Router();
const validate = require('../passwordValidator/passwordValidation').validate;

router.post('/', async (req, res) => {
    username = req.body.username;
    password = req.body.password;
    console.log(username, password);
    userModel.findOne({ username: req.body.username }, function (err, user) {
        if (user) {
            if (err) {
                log(data = {
                    'name': 'error',
                    'status': 201,
                    'message': 'Connection To Mongo Established',
                    'statusCode': 201
                }, 'error');
            }
            else {
                if (validate(req.body.password, user.password)) {
                    console.log('yes');
                } else {
                    console.log('not');
                }
            }
        }
        else{
            console.log('user does not exixts');
        }
    });

    res.send('w');
})

module.exports = router;