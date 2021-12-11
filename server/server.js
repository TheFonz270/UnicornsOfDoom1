const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });

  app.get('/', (req, res) => {
    return "Hello World"
  });