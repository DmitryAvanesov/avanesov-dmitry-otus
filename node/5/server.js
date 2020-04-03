import express from 'express';
import Parser from 'rss-parser';
import path from 'path';

const app = express();
const port = 3000;
const parser = new Parser();

app.get('/', (req, res) => {
  res.sendFile('./pages/index.html', { root: path.resolve() });
});

app.get('/create', (req, res) => {
  res.send('Creation');
});

app.listen(port);

const parseRSS = async () => {
  const feed = await parser.parseURL('https://www.reddit.com/.rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });
};