'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/help-controller');

router.post('/', controller.post);
router.get('/', controller.get);
router.delete('/:state', controller.delete);

module.exports = router;