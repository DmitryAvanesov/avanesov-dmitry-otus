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
  console.log('Got');
  res.sendFile('./pages/create.html', { root: path.resolve() });
});

app.post('/create', (req, res) => {
  console.log('Posted');
  res.redirect('/show-feed');
});

app.get('/show-feed', (req, res) => {
  res.send('It is my feed');
});

app.listen(port);

const parseRSS = async () => {
  const feed = await parser.parseURL('https://www.reddit.com/.rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });
};