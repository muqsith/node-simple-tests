const http = require('http');
const stream = require('stream');
const FormData = require('form-data');

const SIZE = 25 * 1000000;
const buf = Buffer.alloc(SIZE, 'Digital products unit-test\n');
const bufferStream = new stream.PassThrough();
bufferStream.end(buf);

const form = new FormData();
form.append('field', 'file');
form.append('file', bufferStream, { filename: 'dummy.txt', contentType: 'text/plain' });
form.append('type', 'text/plain');
form.append('size', SIZE);

const options = {
    port: 4545,
    host: 'localhost',
    method: 'PUT',
    path: '/new',
    headers: form.getHeaders()
};

const request = http.request(options);
form.pipe(request);
request.on('response', (res) => {
    // Continuously update stream with data
    var body = '';
    res.on('data', function(d) {
        body += d;
    });
    res.on('end', function() {

        // Data reception is done, do whatever with it!
        var parsed = JSON.parse(body);
        console.log(parsed);
    });
});

//request.setHeader('Content-Type', 'multipart/form-data');



//request.end();
