const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;

const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('BBCHistory');
    const storiesCollection = db.collection('stories');
    const storiesRouter = createRouter(storiesCollection);
    app.use('/api/stories', storiesRouter);
    const questionsCollection = db.collection('questions');
    const questionsRouter = createRouter(questionsCollection);
    app.use('/api/questions', questionsRouter);
  })
  .catch(console.err);


app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use(express.static('imgs'))

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });