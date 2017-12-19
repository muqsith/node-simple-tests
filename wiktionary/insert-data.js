const fs = require('fs'),
    config = require('config'),
    readline = require('readline'),
    wiktionary = config.get('wiktionary'),
    fileReadStream = fs.createReadStream(wiktionary.json),

    { Writable } = require('stream')
    ;

class LineByLine extends Writable {
    constructor(options) {
        super(options);
        this.line = '';
    }

    _write(chunk, encoding, callback) {
        let str = chunk.toString();
        if ('\r\n' === str) {
            console.log(this.line);
            this.line = '';
        } else {
            this.line += str;
        }
        callback();
    }
}

const linebyline = new LineByLine({encoding: 'utf8'});

let rl = readline.createInterface({
    input: fileReadStream,
    output: linebyline
});