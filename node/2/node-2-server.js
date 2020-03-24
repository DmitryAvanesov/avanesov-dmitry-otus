import { createServer } from 'http';
import * as fs from 'fs';

export const hostname = '127.0.0.1';
export const port = 3000;

fs.readFile('node-2.html', (err, html) => {
  if (err) {
    throw err;
  }

  const server = createServer((req, res) => {
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
  });
});