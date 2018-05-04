const { ADD_AGE } = require('./action-types');

exports.addAge = (age) => ({
    type: ADD_AGE,
    age
});
