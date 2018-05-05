const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const { createLogger } = require('redux-logger');

const loggerMiddleware = createLogger();


// We must know what we serve, even the minutest details of JSON in a service
// there are no easy ways. Hence a reducer must know the initial state of
// resource it is willing to change.

const { personApp } = require('./reducers');

const getUserRecord = (id) => {
    return (
        new Promise((resolve, reject) => {
            // Below object is assumed to be a database record.
            const resource = {
                id: 1001,
                name: 'Muqsith',
                age: 32,
                location: 'Office'
            };
            setTimeout(() => {
                resolve(resource);
            }, 200);
        })
    );
}

const getStore = () => {
    return (
        new Promise((resolve, reject) => {
            getUserRecord(1001)
            .then((record) => {
                let store = createStore(
                        personApp, 
                        record, 
                        applyMiddleware(
                            thunkMiddleware
                            , loggerMiddleware
                            )
                        );
                resolve(store);
            })
            .catch((err) => {
                console.log(err);
                reject(err)
            });
        })
    )
}

module.exports = { getStore };

