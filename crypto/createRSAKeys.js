const pathModule = require('path');
const crypto = require('crypto');
const fs = require('fs-extra');

const getKeys = () => {
    return new Promise((resolve, reject) => {
        crypto.generateKeyPair(
            'rsa',
            {
                modulusLength: 4096,
                publicKeyEncoding: {
                    type: 'pkcs1',
                    format: 'pem',
                },
                privateKeyEncoding: {
                    type: 'pkcs1',
                    format: 'pem',
                    cipher: 'aes-256-cbc',
                    passphrase: '87e196a37c254e3a90039b487d958653',
                }
            },
            (err, publicKey, privateKey) => {
                if (err) {
                    reject(err);
                } else {
                    resolve([publicKey, privateKey]);
                }
            }
        );
    })
};

const createKeys = async () => {
    const [publicKey, privateKey] = await getKeys();
    const keysFolder = pathModule.resolve(__dirname, 'keys');
    await fs.ensureDir(keysFolder);
    await fs.writeFile(pathModule.resolve(keysFolder, 'public-key.pem'), publicKey);
    await fs.writeFile(pathModule.resolve(keysFolder, 'private-key.pem'), privateKey);
};

exports.createKeys = createKeys;
