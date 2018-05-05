const { ADD_AGE, ERROR, CHANGE_LOCATION } = require('./action-types');

exports.error = (message) => {
    type: ERROR,
    message
};

exports.addAge = (age) => ({
    type: ADD_AGE,
    age
});

const receiveLocation = (location) => ({
    type: CHANGE_LOCATION,
    location
});

exports.changeLocation = (location) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(receiveLocation(location));
        }, 500);
    }
};