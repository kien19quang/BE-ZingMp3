const AlbumService = require('../services/AlbumService')


class AlbumController {


    detailPlaylist = async(req, res) => {
        try {
            let response = await AlbumService.getDetailPlaylist(req.query.id)
    
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


module.exports = new AlbumController