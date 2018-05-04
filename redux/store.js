const { createStore } = require('redux');



// We must know what we serve, even the minutest details of JSON in a service
// there are no easy ways. Hence a reducer must know the initial state of
// resource it is willing to change.

const { personApp } = require('./reducers');


// Below object is assumed to be a database record.
const resource = {
    name: 'Muqsith',
    age: 32,
    location: 'Office'
};

const getStore = () => {
    return createStore(personApp, resource);
}

module.exports = { getStore };

