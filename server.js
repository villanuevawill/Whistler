var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
  

var app = express();
app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);

app.get('/', function(req, res) {
	res.render('index.html')
});


app.listen(8000);