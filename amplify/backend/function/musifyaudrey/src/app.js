const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const usersRouter = require('./routes/users')
const albumsRouter = require('./routes/albums')
const songsRouter = require('./routes/songs')
const userSongsRouter = require('./routes/userSongs')
const filesRouter = require('./routes/files')
const uploadRouter = require('./routes/upload')

// declare a new express app
const cors = require('cors');
const app = express();
// Use the cors middleware
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext())
app.use('/users', usersRouter)
app.use('/albums', albumsRouter)
app.use('/songs', songsRouter)
app.use('/userSongs', userSongsRouter)
app.use('/files', filesRouter)
app.use('/upload', uploadRouter)

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header( "Access-Control-Allow-Methods", "OPTIONS,POST,GET")
    next()
});

app.listen(5000, function () {
    console.log("App started")
});

module.exports = app
