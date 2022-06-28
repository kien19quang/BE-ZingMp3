const { ZingMp3 } = require("zingmp3-api-full")

let getArtist = (artist) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {}
            data = await ZingMp3.getArtist(artist)

            resolve(data)
        } catch (e) {
            reject(e)
        }

    })
}



module.exports = {
    getArtist
}