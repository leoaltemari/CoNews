'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/help-controller');

router.post('/', controller.post);
router.get('/:state', controller.get);
router.get('/', controller.getAll);
router.delete('/:state', controller.delete);

module.exports = router;