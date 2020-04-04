import express from 'express';
import Parser from 'rss-parser';
import mongoose from 'mongoose';

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const parser = new Parser();

const connectionString = 'mongodb+srv://admin:7CEWSY9f5y7xUQYR@cluster0-o95xp.gcp.mongodb.net/otus-node-5?retryWrites=true&w=majority';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const Url = mongoose.model('Url', {
  address: String
});

const Document = mongoose.model('Document', {
  title: String,
  link: String,
  pubDate: String,
  creator: String,
  content: String,
  contentSnippet: String,
  guid: String,
  categories: [String],
  isoDate: String
});


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/create', (req, res) => {
  res.render('create', {
    result: ''
  });
});

app.post('/create', async (req, res) => {
  try {
    const feed = await parser.parseURL(req.body.url);

    Url.find({ address: req.body.url }, async (err, urls) => {
      if (err) throw err;

      const addDocuments = () => {
        feed.items.forEach(async item => {
          const document = new Document(item);
          await document.save();
        });
      };

      if (urls.length == 0) {
        const url = new Url({ address: req.body.url });
        await url.save();

        addDocuments();

        res.render('create', {
          result: 'Success: documents and URL added'
        });
      }
      else {
        addDocuments();

        res.render('create', {
          result: 'Success: documents added, URL was already in the database'
        });
      }
    });
  }
  catch (err) {
    res.render('create', {
      result: 'Error: URL is incorrect'
    });
  }
});

app.get('/show-urls', (req, res) => {
  Url.find((err, urls) => {
    if (err) throw err;
    
    res.render('show-urls', {
      data: urls
    });
  });
});

app.get('/show-documents', (req, res) => {
  Document.find((err, documents) => {
    if (err) throw err;

    res.render('show-documents', {
      data: documents
    });
  });
});

app.listen(port);