const ChartService = require('../services/ChartService')


class ChartController {


    getChartHome = async(req, res) => {
        try {
            let response = await ChartService.getChartHome()
    
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


module.exports = new ChartController