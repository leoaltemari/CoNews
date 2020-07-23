'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/news-controller');

router.post('/', controller.uploadImage, controller.post);
router.get('/:state', controller.get);
router.get('/', controller.getAll);
router.delete('/:id', controller.delete);

module.exports = router;