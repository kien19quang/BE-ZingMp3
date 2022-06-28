const express = require('express');
const router = express.Router();



const chartController = require('../controllers/ChartController');

router.get('/getChartHome', chartController.getChartHome)
router.get('/getNewReleaseChart', chartController.getNewReleaseChart)

module.exports = router