const db = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

var salt = bcrypt.genSaltSync(10);

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let register = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.password || !data.fullName) {
        resolve({
          errCode: 1,
          errMessage: `Missing parameter`,
        });
      } else {
        let check = await checkUserEmail(data.email);

        if (check) {
          resolve({
            errCode: 2,
            errMessage:
              "Email này đã được sử dụng, vui lòng thử tạo tài khoản bằng email khác",
          });
        } else {
          let hashPasswordFromBcrypt = await hashUserPassword(data.password);

          await db.User.create({
            email: data.email,
            password: hashPasswordFromBcrypt,
            fullName: data.fullName,
          });
          resolve({
            errCode: 0,
            errMessage: "Bạn đã tạo tài khoản thành công",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

let login = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.password) {
        resolve({
          errCode: 1,
          errMessage: `Missing parameter`,
        });
      } else {
        let check = await checkUserEmail(data.email);

        if (!check) {
          resolve({
            errCode: 2,
            errMessage: "Email này không tồn tại, vui lòng tạo tài khoản",
          });
        } else {
          let user = await db.User.findOne({
            where: { email: data.email },
          });
          let checkPassword = bcrypt.compareSync(data.password, user.password);

          if (checkPassword) {
            let accessToken = jwt.sign(
              {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
              },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );

            resolve({
              errCode: 0,
              errMessage: "OK",
              token: accessToken,
            });
          } else {
            resolve({
              errCode: 3,
              errMessage: "Bạn đã nhập sai mật khẩu, vui lòng nhập lại",
            });
          }
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  register,
  login,
};
