'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/news-controller');

router.post('/', controller.post);
router.get('/:state', controller.get);

module.exports = router;