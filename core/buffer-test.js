const fs = require('fs');
const path = require('path');

const buf = Buffer.alloc(25 * 1000000, 'tester');

fs.writeFile(path.resolve(__dirname, '..', 'data', 'temp.txt'), buf, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Done!');
    }
});
