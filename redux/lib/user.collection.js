const { getDbClient } = require('../mongo-client');


const createUser = (data) => {
    return (
        new Promise((resolve, reject) => {
            getDbClient()
            .then((db) => {
                let userCollection = db.collection('user');
                return userCollection.insert(data);
            })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            })
        })
    );
};

const readUser = (id) => {
    return (
        new Promise((resolve, reject) => {
            getDbClient()
            .then((db) => {
                let userCollection = db.collection('user');
                return userCollection.findOne({id});
            })
            .then((record) => {
                resolve(record);
            })
            .catch((err) => {
                reject(err);
            })
        })
    );
};

const updateUser = (data) => {
    return (
        new Promise((resolve, reject) => {
            getDbClient()
            .then((db) => {
                let userCollection = db.collection('user');
                return userCollection.replaceOne({id}, data);
            })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            })
        })
    );
};


const deleteUser = (id) => {
    return (
        new Promise((resolve, reject) => {
            getDbClient()
            .then((db) => {
                let userCollection = db.collection('user');
                return userCollection.deleteOne({id});
            })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            })
        })
    );
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}
