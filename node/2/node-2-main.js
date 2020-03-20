import { html } from 'lit-html';
import * as http from 'http';
import { hostname, port } from './node-2-server.js';

const structure = process.argv[2];
const parseObjectToDOM = obj => html`${obj}`;

console.log(structure);

const data = JSON.stringify({
  dom: parseObjectToDOM(structure)
});

const options = {
  hostname: hostname,
  port: port,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options).on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
