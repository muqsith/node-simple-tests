const { createStore } = require('redux'),
    { readUser } = require('../lib/user.collection'),
    { OK, ERROR } = require('../actions/types')
    ;
/**
 * Store structure
    {
        create: {
            status: ok | error | inprogress
        },
        read: {
            status: ok | error | inprogress
        },
        update: {
            status: ok | error | inprogress
        },
        delete: {
            status: ok | error | inprogress
        },
        data: {...record},
        err: {...error}
    }

 */

 const initialState = {
    create: {
        status: OK
    },
    read: {
        status: OK
    },
    update: {
        status: OK
    },
    delete: {
        status: OK
    }
 }

const getStore = (id) => {
    return (
        new Promise((resolve, reject) => {
            Promise.resolve()
            .then(() => {
                if (!id) {
                    return Promise.resolve(null);
                } else {
                    return readUser(id);
                }
            })
            .then((record) => {
                let userStore = {data: record, err: null, ...initialState};

            })
            .catch((err) => {
                reject(err);
            });
        })
    );
};

module.exports = {
    getStore
};
