var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
  

var app = express();
app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile);

var filepath = path.join(__dirname, 'Paradise.m4a');

app.get('/', function(req, res) {
	res.render('index.html')
});

app.get('/music', function(req, res){
	console.log('yoloooooooooooo');
	res.set({'Content-Type': 'audio/mpeg'});
	var readStream = fs.createReadStream(filepath);
	readStream.pipe(res);
})

app.listen(8000);