const pathModule = require('path');
const crypto = require('crypto');
const fs = require('fs-extra');

const { createKeys } = require('./createRSAKeys');

const keysFolder = pathModule.resolve(__dirname, 'keys');
const publicKeyFile = pathModule.resolve(keysFolder, 'public-key.pem');
const privateKeyFile = pathModule.resolve(keysFolder, 'private-key.pem');

const message = 'A quick brown fox jumped on the lazy dog';

const encrypt = async (message) => {
    const buffer = Buffer.from(message, 'utf8');
    const fileBuffer = await fs.readFile(publicKeyFile);
    const publicKey = fileBuffer.toString('utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString('base64');
};

const decrypt = async (encryptedMessage) => {
    const buffer = Buffer.from(encryptedMessage, 'base64');
    const fileBuffer = await fs.readFile(privateKeyFile);
    const privateKey = fileBuffer.toString('utf8');
    const decrypted = crypto.privateDecrypt({
        key: privateKey,
        passphrase: '87e196a37c254e3a90039b487d958653'
    }, buffer);
    return decrypted.toString('utf8');
};


const test = async () => {
    // await createKeys();
    for (let i = 0; i < 10; i += 1) {
        const encryptedMessage = await encrypt(message + ' time: ' + Date.now());
        console.log(encryptedMessage);
        const decryptedMessage = await decrypt(encryptedMessage);
        console.log(decryptedMessage);
    }

    try {
        const testMsg = await decrypt('ldkfjdlkfjdkfjdkfjdflkdfl');
    } catch (err) {
        console.log("alright it's okay");
    }
};

test();