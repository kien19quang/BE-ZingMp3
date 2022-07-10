const { ZingMp3 } = require("zingmp3-api-full")

let getSongById = (id) => {
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

                data = await ZingMp3.getSong(id)

                resolve(data)
            }


        } catch (e) {
            reject(e)
        }

    })
}

let getSongInfo = (id) => {
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

                data = await ZingMp3.getInfoSong(id)

                resolve(data)
            }


        } catch (e) {
            reject(e)
        }

    })
}



module.exports = {
    getSongById,
    getSongInfo
}