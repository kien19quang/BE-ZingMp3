const express = require('express');
const router = express.Router();



const homeController = require('../controllers/HomeController');

router.get('/crud', homeController.crud);
router.get('/', homeController.home)

module.exports = router