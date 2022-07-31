const express = require("express");
const router = express.Router();

const searchSongController = require("../controllers/SearchSongController");

router.get("/searchSong", searchSongController.searchSong);

module.exports = router;
