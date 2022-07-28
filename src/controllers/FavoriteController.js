const FavoriteService = require("../services/FavoriteService");

class FavoriteController {
  addSongFavorite = async (req, res) => {
    try {
      let response = await FavoriteService.addSongFavorite(req.body);

      return res.status(200).json(response);
    } catch (e) {
      console.log(e);
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from the server",
      });
    }
  };

  getAllSongFavorite = async (req, res) => {
    try {
      let response = await FavoriteService.getAllSongFavorite(req.user.id);

      return res.status(200).json(response);
    } catch (e) {
      console.log(e);
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from the server",
      });
    }
  };

  deleteSongFavorite = async (req, res) => {
    try {
      let response = await FavoriteService.deleteSongFavorite(req.query.songId);

      return res.status(200).json(response);
    } catch (e) {
      console.log(e);
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from the server",
      });
    }
  };
}

module.exports = new FavoriteController();
