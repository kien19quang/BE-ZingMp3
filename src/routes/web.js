const homeRouter = require('./home')
const albumRouter = require('./album')
const top100Router = require('./top100')
const chartRouter = require('./chart')
const artistRouter = require('./artist')
const songRouter = require('./song')

function route(app) {


    app.use('/album', albumRouter)
    app.use('/top100', top100Router)
    app.use('/zing-chart', chartRouter)
    app.use('/artist', artistRouter)
    app.use('/song', songRouter)
    app.use('/', homeRouter);
}

module.exports = route;