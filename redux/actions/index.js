const {
    CREATE,
    RECEIVE_CREATE,
    READ,
    RECEIVE_READ,
    UPDATE,
    RECEIVE_UPDATE,
    DELETE,
    RECEIVE_DELETE,
    OK,
    ERROR,
    INPROGRESS
} = require('./types');

const createUser = (data) => {
    return (
        {
            type: CREATE,
            data,
            create: {
                status: INPROGRESS
            }
        }
    )
};

const receiveCreateUser = (err, data) => {
    const userCreationResult = {
        type: RECEIVE_CREATE,
        status: (!!err) ? ERROR : OK
    };
    if (result.status === OK) {
        userCreationResult.data = data;
    } else if (result.status === ERROR) {
        userCreationResult.error = err;
    }
    return userCreationResult;
};

const updateUser = (data) => {

};

const receiveUpdateUser = () => {

};

const getUser = (id) => {

};

const receiveGetUser = () => {

};

const deleteUser = (id) => {

};

const receiveDeleteUser = () => {

};
