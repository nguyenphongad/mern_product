const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers');

router.get('/', UserController.RegisterUser); 

module.exports = router