const userModel = require('../../setups/dbSetup/mongo.setup');
const log = require('../../setups/logger');
const router = require('express').Router();
const { validate } = require('../passwordValidator/passwordValidation');

router.post('/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    userModel.findOne({ username: req.body.username }, async function (err, user) {
        if (user) {
            console.log(user);
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
                    res.send({
                        "msg": {
                            'name': 'Auth Success',
                            'status': 201,
                            'message': 'Authentication Successfull',
                            'statusCode': 201
                        },
                        "data": {
                            "username": user.username,
                            "image": user.image,
                            "designation": user.designation,
                            "role": user.role,
                            "zone": user.zone,
                            "wing": user.wing,
                            "workerID": user.workerID,
                            "image": user.image,
                            "department": user.department
                        }
                    });
                } else {
                    res.send({
                        'name': 'Auth Error',
                        'status': 204,
                        'message': 'Password Incorrect!',
                        'statusCode': 204
                    });
                }
            }
        }
        else {
            res.send({
                'name': 'Auth Error',
                'status': 204,
                'message': 'User Does not Exist!',
                'statusCode': 204
            });
        }
    });
})

module.exports = router;