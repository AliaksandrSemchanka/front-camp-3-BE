const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', (...args) => controller.find(...args));

router.get('/:id', (...args) => controller.findById(...args));

router.post('/', (...args) => controller.create(...args));

router.put('/:id', (...args) => controller.update(...args));

router.delete('/:id', (...args) => controller.remove(...args));

module.exports = router;
