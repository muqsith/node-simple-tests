const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    const {method, url, headers} = request;
    let requestDetails = `Request: ${url} => ${method} => ${JSON.stringify(headers)}
    made @ ${new Date()}`;
    console.log(requestDetails);
    let body = [];
    request
    .on('error', (err) => {
        if (err) {
            console.error(err);
        }
    })
    .on('data', (chunk) => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
    });

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`<html><body><h1>Response: </h1>
        <span>
            ${requestDetails}
        </span>
        </body></html>`);
});

server.listen(8998);