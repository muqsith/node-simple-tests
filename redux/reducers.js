const { ADD_AGE, CHANGE_LOCATION } = require('./action-types');

let control_count = 0;

const getInitialState = () => {
    return ({
        name: '',
        age: 32,
        location: ''
    });
}

exports.personApp = (state = getInitialState(), action) => {
    console.log(`Control came here [${++control_count}]`);
    switch (action.type) {
        case ADD_AGE: {
            return { ...state, age: state.age + action.age };
        }
        case CHANGE_LOCATION: {
            return { ...state, location: action.location };
        }
        default: return state;
    }
}
