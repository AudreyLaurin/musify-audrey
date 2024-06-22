const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const usersRouter = require('./routes/users')
const albumsRouter = require('./routes/albums')
const songsRouter = require('./routes/songs')
const sharedSongsRouter = require('./routes/sharedSongs')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use('/users', usersRouter)
app.use('/albums', albumsRouter)
app.use('/songs', songsRouter)
app.use('/sharedSongs', sharedSongsRouter)

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});

app.listen(5000, function () {
    console.log("App started")
});

module.exports = app
