


class HomeController {


    home(req, res, next) {
        res.send('Hello world')
    }

    // [GET] /crud
    crud(req, res) {
        res.render('crud.ejs')
    }


}


module.exports = new HomeController