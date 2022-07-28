const db = require("../models/index");

let getOneUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!user.id) {
        resolve({
          errCode: 1,
          errMessage: `Missing parameter`,
        });
      } else {
        let userInfor = await db.User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ["password"],
          },
        });

        userInfor
          ? resolve({ errCode: 0, errMessage: "OK", userInfor })
          : resolve({ errCode: 1, errMessage: "User not found !" });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getOneUser,
};
