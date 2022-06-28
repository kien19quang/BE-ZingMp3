const ArtistService = require('../services/ArtistService')


class ArtistController {


    getArtist = async(req, res) => {
        try {
            let response = await ArtistService.getArtist(req.query.artist)
    
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


module.exports = new ArtistController