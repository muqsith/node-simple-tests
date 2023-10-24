// https://stackoverflow.com/a/16044400/2388706

var stream = require("stream");

// Initiate the source
var bufferStream = new stream.PassThrough();

// Write your buffer
bufferStream.end(new Buffer("Test data."));

// Pipe it to something else  (i.e. stdout)
bufferStream.pipe(process.stdout);
