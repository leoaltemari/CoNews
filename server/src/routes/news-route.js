'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/news-controller');

router.post('/', controller.post);
router.get('/:state', controller.get);
router.delete('/:link', controller.delete);

module.exports = router;