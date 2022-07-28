const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const favoriteController = require("../controllers/FavoriteController");

router.get(
  "/getAllSongFavorite",
  verifyToken,
  favoriteController.getAllSongFavorite
);
router.post("/addSongFavorite", favoriteController.addSongFavorite);
router.delete("/deleteSongFavorite", favoriteController.deleteSongFavorite);

module.exports = router;
