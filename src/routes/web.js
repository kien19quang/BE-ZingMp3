const homeRouter = require('./home')
const albumRouter = require('./album')

function route(app) {


    app.use('/album', albumRouter)
    app.use('/', homeRouter);
}

module.exports = route;