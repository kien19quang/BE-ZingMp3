const { ZingMp3 } = require("zingmp3-api-full")

let getTop100 = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {}
            data = await ZingMp3.getTop100()

            resolve(data)
        } catch (e) {
            reject(e)
        }

    })
}



module.exports = {
    getTop100
}