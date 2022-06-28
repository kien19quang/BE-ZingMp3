const express = require('express');
const router = express.Router();



const artistController = require('../controllers/ArtistController');

router.get('/getArtist', artistController.getArtist)

module.exports = router