const config = require('config'),
    path = require('path'),
    fs = require('fs')
    ;

const WIKTIIONARY = config.get('wiktionary');


const readStream = fs.createReadStream(WIKTIIONARY.json, {encoding: 'utf8'}),
    writeStream = fs.createWriteStream(path.resolve(__dirname, '..', 'data', 'temp-big.json'),
         {encoding: 'utf8'})
    ;

function slowDown() {
    if (readStream.isPaused()) {
        readStream.resume();
    } else {
        readStream.pause();
    }
}

const INTERVALID = setInterval(slowDown, 30 * 1000);

readStream.on('close', () => {
    clearInterval(INTERVALID);
});

readStream.pipe(writeStream);

slowDown();