const path = require('path');
const fs = require('fs');


const dataFile = '/Users/abdulmuqsith/Development/data/942312891_T_ONTIME_REPORTING.csv';

const getFd = (filePath) => {
    const promiseHandler = (resolve, reject) => {
        fs.open(filePath, 'r', (err, fd) => {
            if (err) {
                reject(err);
            } else {
                resolve(fd);
            }
        });
    };
    return new Promise(promiseHandler);
};

const getFstat = (fd) => {
    const promiseHandler = (resolve, reject) => {
        fs.fstat(fd, (err, stat) => {
            if (err) {
                reject(err);
            } else {
                resolve(stat);
            }
        });
    };
    return new Promise(promiseHandler);
}

async function _main() {
    const fd = await getFd(dataFile);
    const stat = await getFstat(fd);
    const fileSize = stat.size;
    const chunkSize = 16 * 1024;
    const buf = Buffer.allocUnsafe(chunkSize);
    let position = 0;
    fs.read(fd, buf, 0, chunkSize, position, (err, bytesRead, buffer) => {
        if (err) {
            console.log(err);
        } else {
            console.log(buffer.toString('utf8'));
        }
    });
}

_main();