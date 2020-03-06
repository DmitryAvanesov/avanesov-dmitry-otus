const http = require('http');
const ParallelRequest = require('parallel-http-request');
const server = require('./node-1-server');

const numberOfRequests = process.argv[2];
const requestType = process.argv[3];

const sendRequestsSequential = () => {
  for (let curReqNumber = 0; curReqNumber < numberOfRequests; curReqNumber++) {
    const options = {
      hostname: server.hostname,
      port: server.port,
      path: '/',
      method: 'GET',
      headers: {
        'request-number': curReqNumber + 1,
        'request-max-number': numberOfRequests
      }
    };
  
    const req = http.request(options);

    req.on('error', error => {
      console.error(error);
    });

    req.end();
  }
};

const sendRequestsParallel = () => {
  const serverUrl = `http://${server.hostname}:${server.port}`;
  const req = new ParallelRequest();

  for (let curReqNumber = 0; curReqNumber < numberOfRequests; curReqNumber++) {
    req.add({
      url: serverUrl,
      method: 'GET',
      headers: {
        'request-number': curReqNumber + 1,
        'request-max-number': numberOfRequests
      }
    });
  }

  req.send();
};

switch (requestType) {
  case 'sequential':
    sendRequestsSequential();
    break;
  case 'parallel':
    sendRequestsParallel();
    break;
  default:
    throw new Error('Unknown request type');
}