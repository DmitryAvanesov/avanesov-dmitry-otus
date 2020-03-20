import { html } from 'lit-html';
import { createServer } from 'http';

export const hostname = '127.0.0.1';
export const port = 3000;

const server = createServer((req, res) => {
  const data = [];

  req.on('data', chunk => {
    data.push(chunk);
  });

  req.on('end', () => {
    console.log(JSON.parse(data));
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(JSON.parse(data).dom);
});

server.listen(port, hostname, () => {
  console.log(`Server started at http://${hostname}:${port}`);
});