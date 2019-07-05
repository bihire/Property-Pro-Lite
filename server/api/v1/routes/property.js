const express = require('express');
const router = express.Router();
const PropertyController = require('../controllers/propertyController');

router.post('/register', PropertyController.register);
router.get('/login', PropertyController.login);

module.exports = (router);