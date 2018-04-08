const express = require('express'),
    router = express.Router()
    ;

router.get('/:id', (req, res, next) => {
    next();
});

module.exports = router;
