const express = require('express'),
    router = express.Router()
    ;

router.use('/add', require('./add'));
router.use('/delete', require('./delete'));
router.use('/update', require('./update'));
router.use('/fetch', require('./fetch'));

module.exports = router;
