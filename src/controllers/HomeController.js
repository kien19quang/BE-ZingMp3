const HomeService = require('../services/HomeService')


class HomeController {


    homePage = async(req, res) => {
        try {
            let response = await HomeService.getHomePage(req.query.id)
    
            return res.status(200).json(response)
        } catch (e) {
            console.log(e);
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from the server"
            })
        }
    }


}


module.exports = new HomeController