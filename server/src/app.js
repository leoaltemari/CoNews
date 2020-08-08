'uses strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const router = express.Router();

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const newsRoute = require('./routes/news-route');
const helpRoute = require('./routes/help-route');

// MiddleWares
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', indexRoute);
app.use('/news', newsRoute);
app.use('/help', helpRoute);

// Conect to the DB
// Needs put a connection string to a MongoDB cluster. There is the Atlas clound
//MongoDB to meke the development and the tests easier
const uri = "put your connection string here";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => {
    console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

module.exports = app;