const router = require('express').Router();
const userModel = require('../../setups/dbSetup/mongo.setup');
const uuid = require('uuid').v4();
const log = require('../../setups/logger')
const { hash } = require('../../validators/passwordValidator/passwordValidation');

router.post('/addUser', async (req, res) => {
    userModel.findOne({ username: req.body.username }, async function (err, user) {
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
                res.send({
                    'name': 'success',
                    'status': 201,
                    'message': 'Username Already Exists',
                    'statusCode': 201
                });
            }
        }
        else {

            const addUser = new userModel({
                "uid": uuid,
                "username": req.body.username,
                "password": hash(req.body.password),
                "email": req.body.email,
                "designation": req.body.designation,
                "role": req.body.role,
                "zone": req.body.zone,
                "wing": req.body.wing,
                "accessibility": {
                    "cutting": req.body.cutting,
                    "stitching": req.body.stitching,
                    "checking": req.body.checking
                },
                "workerID": req.body.workerID,
                "image": req.body.image,
                "department": req.body.department,
                "dateCreated": req.body.dateCreated,
                "createdBy": req.body.createdBy,
                "dateModified": req.body.dateModified,
                "modifiedBy": req.body.modifiedBy
            });

            try {
                const savedData = await addUser.save();
                log(data = {
                    'name': 'success',
                    'status': 201,
                    'message': 'User Added Successfully',
                    'statusCode': 201
                }, 'success');
                res.send({
                    'name': 'success',
                    'status': 201,
                    'message': 'User Added Successfully',
                    'statusCode': 201
                });
            } catch (error) {
                log(data = {
                    'name': 'error',
                    'status': 201,
                    'message': 'User Adding Failed',
                    'statusCode': 201
                }, 'error');
            }
        }
    });
});

module.exports = router;