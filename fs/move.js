const path = require('path');
const fs = require('fs-extra');



async function moveFile (fromDir, toDir) {
    const fileName = 'all-domains.json'
    return fs.move(path.resolve(fromDir, fileName), path.resolve(toDir, fileName), {overwrite: true});
}

async function mainFn () {
    await moveFile('/tmp/shops', __dirname);
};

mainFn();
