const { ZingMp3 } = require("zingmp3-api-full")

let getDetailPlaylist = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: `Missing parameter`
                })    
            }
            else {
                let data = {}

                data = await ZingMp3.getDetailPlaylist(id)

                resolve(data)
            }


        } catch (e) {
            reject(e)
        }

    })
}



module.exports = {
    getDetailPlaylist
}