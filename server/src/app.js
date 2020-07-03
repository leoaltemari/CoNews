'uses strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const router = express.Router();

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const newsRoute = require('./routes/news-route');
const helpRoute = require('./routes/help-route');

// MidleWares
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', indexRoute);
app.use('/news', newsRoute);
app.use('/help', helpRoute);

// Conect to the DB
const uri = "mongodb+srv://conews123:conews123@conews.j5o03.mongodb.net/CoNews?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => {
    console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

module.exports = app;