const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

exports.hostname = hostname;
exports.port = port;

const requestHandlingTimeout = 100;

const server = http.createServer((req, res) => {
  console.log(`Server received ${req.method}-request #${req.headers['request-number']}`);

  setTimeout(() => {
    console.log(`Server handled request #${req.headers['request-number']} for ${requestHandlingTimeout}ms`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<H1>Node-1 task</H1>');
  }, requestHandlingTimeout);
});

server.listen(port, hostname, () => {
  console.log('Server started');
});