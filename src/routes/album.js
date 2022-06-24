const express = require('express');
const router = express.Router();



const albumController = require('../controllers/AlbumController');

router.get('/getDetailPlaylist', albumController.detailPlaylist)

module.exports = router