const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const userController = require("../controllers/UserController");

router.get("/get-one-user", verifyToken, userController.getOneUser);

module.exports = router;
