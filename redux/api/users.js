const httpError = require('http-errors'),
    multer = require('multer'),
    express = require('express'),
    router = express.Router(),
    upload = multer()
    ;
// C
router.post('/', upload.array(), (req, res, next) => {
    let data = null;
    try {
        data = JSON.parse(req.body.data);
        console.log(data);
        /*
            getStore()
            .then((store) => {
                store.dispatch({type: Actions.CREATE, data, req, res});
            })
            .catch((err) => {
                next(httpError(500, err.message));
            })
        */
        res.send({status: 'ok'});
    } catch(err) {
        console.log(err.message);
        next(httpError(500, err.message));
    }
});

// R
router.get('/:id', (req, res, next) => {
    next();
});

// U
router.put('/', upload.array(), (req, res, next) => {
    next();
});

// D
router.delete('/:id', (req, res, next) => {
    next();
});

module.exports = router;
