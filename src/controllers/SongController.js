const SongService = require('../services/SongService')


class SongController {


    getSong = async(req, res) => {
        try {
            let response = await SongService.getSongById(req.query.id)
    
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


module.exports = new SongController