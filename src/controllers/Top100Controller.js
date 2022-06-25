const Top100Service = require('../services/Top100Service')


class Top100Controller {


    getTop100 = async(req, res) => {
        try {
            let response = await Top100Service.getTop100()
    
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


module.exports = new Top100Controller