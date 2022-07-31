const { ZingMp3 } = require("zingmp3-api-full");

let searchSong = (search) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!search) {
        resolve({
          errCode: 1,
          errMessage: `Missing parameter`,
        });
      } else {
        let data = {};

        data = await ZingMp3.search(search);

        resolve(data);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  searchSong,
};
