const express = require('express'),
    router = express.Router(),
    { getStore } =  require('./store'),
    { addAge } = require('./actions')
    ;

const subscribeResponseToStore = (store, res) => {
    store.subscribe(() => {
        res.send(store.getState());
    });
}

router.get('/add/:age', (req, res) => {
    let age = +req.params.age;
    let store = getStore();
    subscribeResponseToStore(store, res);
    store.dispatch(addAge(age));
});

module.exports = router;