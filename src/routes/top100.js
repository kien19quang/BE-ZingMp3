const express = require('express');
const router = express.Router();



const top100Controller = require('../controllers/Top100Controller');

router.get('/getTop100', top100Controller.getTop100)

module.exports = router