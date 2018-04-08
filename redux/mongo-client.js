const config = require('./config'),
    MongoClient = require('mongodb').MongoClient
    ;

// Connection URL
const url = config.dbUrl;

let client = null;

const getDbClient = () => {
    return (
        new Promise((resolve, reject) => {
            if (client) {
                resolve(client);
            } else {
                // Use connect method to connect to the server
                MongoClient.connect(url, function(err, dbConnection) {
                    if (err) {
                        reject(err);
                    } else {
                        client = dbConnection;
                        console.log("Connected successfully to server");
                        resolve(client);
                    }
                });
            }
        })
    );
};

const closeConnection = () => {
    if (client) {
        client.close();
        console.log('Connection closed ...');
    }
}

module.exports = {
    getDbClient,
    closeConnection
};
