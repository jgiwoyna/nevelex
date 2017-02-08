var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var portDecision = process.env.PORT || 3000;
var request = require('request');
var http = require('http');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/views/index.html'));
});

app.use(express.static('public'));

app.listen(portDecision, function(){
  console.log('running on port', portDecision);
});
