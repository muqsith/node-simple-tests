const fs = require('fs'),
    zlib = require('zlib'),
    readline = require('readline'),
    SimpleWritable = require('./simplewritable.js'),
    { PassThrough } = require('stream')
    ;

let jobs = '../data/all-completed-jobs-huge.txt';

let pic1 = '/Users/muqsithirfan/Pictures/IMG_20171014_131055881.jpg';

let readStream = fs.createReadStream(jobs);

let outpic = '../data/pic1.jpg';

let outfile = '../data/copy.txt';

let writeStream = fs.createWriteStream(outfile);

//readStream.pipe(writeStream);
let dummyStream = new PassThrough();
//readStream.pipe(dummyStream).pipe(dummyStream).pipe(process.stdout);


let z = zlib.createGzip();

//readStream.pipe(z).pipe(writeStream);

let simpleWriter = new SimpleWritable();
readStream.pipe(simpleWriter).pipe(dummyStream);

let simpleLineWriter = new SimpleWritable({rl: true});
let rlInterface = {
    input: readStream,
    output: simpleLineWriter,
    terminal: true
};

//let rl = readline.createInterface(rlInterface);




