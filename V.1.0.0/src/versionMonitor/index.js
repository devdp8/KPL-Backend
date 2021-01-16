const router = require('express').Router();
const log = require('../setups/logger');

router.get('/', async (req, res) => {
    let data1 = {
        "version": process.env.version,
        "developedBy": process.env.developedBy,
        "server": process.env.server
    };
    log(data = {
        'name': 'success',
        'status': 201,
        'message': 'Version Fetched Successfully',
        'statusCode': 201
    }, 'success');
    res.send(data1);
});

module.exports = router;