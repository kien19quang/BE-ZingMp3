const UserService = require("../services/UserService");

class UserController {
  getOneUser = async (req, res) => {
    try {
      let response = await UserService.getOneUser(req.user);

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

module.exports = new UserController();
