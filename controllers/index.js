const router = require('express').Router();
const path = require('path');

const api = require('./api');
const html = require('./html');

router.use('/', html);
router.use('/api', api);


module.exports = router;

