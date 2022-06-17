const express = require('express');
const route = require('./routes/web');
const viewEngine = require('./config/viewEngine')
const connectDB = require('./config/connectDB')
const cors = require('cors')

const port = process.env.PORT || 3086;

const app = express();


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


// Cors
let corsOptions = {
    origin: process.env.URL_REACT
}

app.use(cors(corsOptions));



viewEngine(app);

// Init routes
route(app)


// Connect DB
connectDB();



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})