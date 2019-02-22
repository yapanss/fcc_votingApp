const PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var pollApi = require('./routes/poll.route');
var userApi = require('./routes/user.route');

var app = express()

mongoose.connect('mongodb://yapanss:11Braves@ds023438.mlab.com:23438/fcc_votingapp', (err,db) => {
  if(err) console.log(err)
  console.log('Successfully connected to database')
}, {useNewUrlParser: true})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/dist/votingApp'))

pollApi(app)
userApi(app)

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/votingApp/index.html'));
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`))
