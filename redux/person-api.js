const express = require('express'),
    router = express.Router(),
    { getStore } =  require('./store'),
    { addAge, changeLocation } = require('./actions')
    ;

const subscribeResponseToStore = (store, res) => {
    store.subscribe(() => {
        res.send(store.getState());
    });
}

router.get('/add-age/:age', (req, res) => {
    let age = +req.params.age;
    getStore()
    .then((store) => {
        subscribeResponseToStore(store, res);
        store.dispatch(addAge(age));
    })
    .catch((err) => {
        next(err);
    })
    ;
});

router.get('/change-location/:location', (req, res) => {
    let location = req.params.location;
    getStore()
    .then((store) => {
        subscribeResponseToStore(store, res);
        store.dispatch(changeLocation(location));
    })
    .catch((err) => {
        next(err);
    })
    ;    
});

module.exports = router;