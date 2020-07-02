'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/products-controller');

router.post('/', controller.post);