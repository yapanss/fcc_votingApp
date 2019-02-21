const dotenv = require("dotenv");
  dotenv.config()

var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser')

var pollApi = require('./routes/poll.route')
var userApi = require('./routes/user.route')
// var loginApi = require('./routes/login.route')
// var userInfoApi = require('./routes/userInfoApi')
// var authenticateApi = require('./routes/authenticateApi')

var app = express()

mongoose.connect('mongodb://yapanss:11Braves@ds023438.mlab.com:23438/fcc_votingapp', (err,db) => {
  if(err) console.log(err)
  console.log('Successfully connected to database')
}, {useNewUrlParser: true})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// loginApi(app)
// app.use(authenticateApi)

userApi(app)
pollApi(app)
// userInfoApi(app)

app.listen(3000, console.log('Server listening on port 3000'))