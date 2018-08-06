const http = require('http');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    const body = JSON.stringify( { message: 'Event Accepted'} );
    response.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'application/json' });
    response.end(body);
    console.log('--- end ---')
    

}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/')
