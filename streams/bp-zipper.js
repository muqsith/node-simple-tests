const config = require('config'),
    path = require('path'),
    fs = require('fs'),
    gzip = require('zlib').createGzip()
    ;

const WIKTIIONARY = config.get('wiktionary');

const inp = fs.createReadStream(WIKTIIONARY.json),
    out = fs.createWriteStream(path.resolve(__dirname, '..', 'data', 'temp-big.gz'))
    ;

inp.pipe(gzip).pipe(out);