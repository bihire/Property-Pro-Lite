const express = require('express');
const router = express.Router();
const PropertyController = require('../controllers/propertyController');

router.post('/property/add', PropertyController.add);
router.post('/property/update', PropertyController.update);
router.get('/property/:id', PropertyController.get);
router.get('/property', PropertyController.get_all);
router.delete('/property/:id', PropertyController.delete);

module.exports = (router);