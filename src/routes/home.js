const express = require('express');
const router = express.Router();



const homeController = require('../controllers/HomeController');

router.get('/getHomePage', homeController.homePage)

module.exports = router