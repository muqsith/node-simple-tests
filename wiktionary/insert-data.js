const fs = require('fs'),
    config = require('config'),
    readline = require('readline'),
    wiktionary = config.get('wiktionary'),
    fileReadStream = fs.createReadStream(wiktionary.json, 'utf8'),
    { Writable } = require('stream')
    ;

class LineByLine extends Writable {
    constructor(options) {
        super(options);
        this.line = '';
    }

    _write(chunk, encoding, callback) {
        let str = chunk.toString();
        let lines = str.split('\n');
        console.log(lines);
        callback();
    }
}

const linebyline = new LineByLine({encoding: 'utf8'});

fileReadStream.pipe(linebyline);

function pauseStream() {
    setTimeout(() => {
        console.log('Pausing the stream ...');
        fileReadStream.pause();
        resumeStream();
    }, 2000);
}
function resumeStream() {
    setTimeout(() => {
        console.log('Resuming the stream ...');
        fileReadStream.resume();
        pauseStream();
    }, 2000);
}

pauseStream();






/*
let rl = readline.createInterface({
    input: fileReadStream,
    output: process.stdout,
    terminal: true
});
*/

