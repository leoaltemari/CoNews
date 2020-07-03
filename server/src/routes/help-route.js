'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/help-controller');

router.post('/', controller.post);
router.get('/:state', controller.get);

module.exports = router;