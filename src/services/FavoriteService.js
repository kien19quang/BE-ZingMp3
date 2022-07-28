const db = require("../models/index");

let validateDataSong = (dataSong) => {
  let arrCheck = [
    "encodeId",
    "userId",
    "thumbnailM",
    "title",
    "artistsNames",
    "albumTitle",
    "duration",
  ];
  let check = true;
  for (let i = 0; i < arrCheck.length; i++) {
    if (!dataSong[arrCheck[i]]) {
      check = `Missing parameter ${arrCheck[i]}`;
      break;
    }
  }
  return check;
};

let addSongFavorite = (dataSong) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = validateDataSong(dataSong);
      if (check !== true) {
        resolve({
          errCode: 1,
          errMessage: `${check}`,
        });
      } else {
        await db.PlaylistFavorite.create({
          encodeId: dataSong.encodeId,
          userId: dataSong.userId,
          thumbnailM: dataSong.thumbnailM,
          title: dataSong.title,
          artistsNames: dataSong.artistsNames,
          albumTitle: dataSong.albumTitle,
          duration: dataSong.duration,
        });

        resolve({
          errCode: 0,
          errMessage: "OK",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllSongFavorite = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.PlaylistFavorite.findAll({
        where: { userId: userId },
      });

      resolve({
        errCode: 0,
        errMessage: "OK",
        data,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let deleteSongFavorite = (songId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!songId) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await db.PlaylistFavorite.destroy({
          where: { encodeId: songId },
        });
        resolve({
          errCode: 0,
          errMessage: "OK",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  addSongFavorite,
  getAllSongFavorite,
  deleteSongFavorite,
};
