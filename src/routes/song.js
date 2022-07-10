const express = require('express');
const router = express.Router();



const songController = require('../controllers/SongController');

router.get('/getSongById', songController.getSong)
router.get('/getSongInfo', songController.getSongInfo)

module.exports = router