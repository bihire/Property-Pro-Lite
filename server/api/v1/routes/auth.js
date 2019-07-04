const express = require('express');
const router = express.Router();
const index = require('../controllers')
const AuthenticationController = require('../controllers/aunthenticationController');

router.get('/register', AuthenticationController.register);
router.get('/bro', index.index);

module.exports = (router);