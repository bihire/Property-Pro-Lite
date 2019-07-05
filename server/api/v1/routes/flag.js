const express = require('express');
const router = express.Router();
const FlagController = require('../controllers/flagController');

router.post('/create', FlagController.register);
router.get('/', FlagController.login);


module.exports = (router);