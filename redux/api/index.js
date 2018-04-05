const express = require('express'),
    router = express.Router()
    ;

router.use('/user', require('./users'))

module.exports = router;
