const SearchSongService = require("../services/SearchSongService");

class SearchSongController {
  searchSong = async (req, res) => {
    try {
      let response = await SearchSongService.searchSong(req.query.search);

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

module.exports = new SearchSongController();
