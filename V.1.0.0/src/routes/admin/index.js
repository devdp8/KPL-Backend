const router = require('express').Router();
const userManage = require('./userManagement');

router.use('/manageUser', userManage);

module.exports = router;