const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const verifyToken = (req, res, next) => {
  let token = req.headers["access-token"];

  if (!token) {
    return res.status(404).json({ err: 1, msg: "Missing token !" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ err: 1, msg: "Require authentication !" });
    }
    req.user = data;

    next();
  });
};

module.exports = verifyToken;
