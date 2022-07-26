const AuthService = require("../services/AuthService");

class AuthController {
  register = async (req, res) => {
    try {
      let response = await AuthService.register(req.body);

      return res.status(200).json(response);
    } catch (e) {
      console.log(e);
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from the server",
      });
    }
  };

  login = async (req, res) => {
    try {
      let response = await AuthService.login(req.body);

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

module.exports = new AuthController();
