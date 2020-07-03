'uses strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const noticeRoute = require('./routes/notice-route');

// MidleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', indexRoute);
app.use('/notice', noticeRoute);

module.exports = app;