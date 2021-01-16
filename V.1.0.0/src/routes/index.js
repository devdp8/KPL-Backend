const router = require('express').Router();
const admin = require('./admin');
const manager = require('./manager');
const supervisor = require('./supervisor');

router.use('/admin', admin);
router.use('/manager', manager);
router.use('/supervisor', supervisor);

module.exports = router;