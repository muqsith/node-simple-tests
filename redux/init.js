const config = require('./config'),
    { getDbClient } = require('./mongo-client')
    ;

const initUsersCollection = () => {
    return (
        new Promise((resolve, reject) => {
            let db = null;
            getDbClient()
            .then((client) => {
                db = client.db(config.dbName);
                return db.listCollections().toArray();
            })
            .then((collections) => {
                if (!collections.some((collection) => {
                        return (collection.name === 'users');
                    })) {
                    console.log('Created users collection ...');
                    return db.createCollection('users');
                }
            })
            .then(() => {
                resolve();
            })
            .catch((err) => {
                console.log(`Failed to create users collection`, err);
                reject(err);
            })
        })
    );
};

function init() {
    return (
        new Promise((resolve, reject) => {
            // initialization code goes here ...
            initUsersCollection()
            .then(resolve)
            .catch(reject);
        })
    );
}

module.exports = init;
