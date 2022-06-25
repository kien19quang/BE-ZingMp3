const { ZingMp3 } = require("zingmp3-api-full")

let getChartHome = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {}
            data = await ZingMp3.getChartHome()

            resolve(data)
        } catch (e) {
            reject(e)
        }

    })
}



module.exports = {
    getChartHome
}