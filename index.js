var express = require('express');
var app = express();
var firebase = require('firebase');

var handlebars = require('express3-handlebars')
	.create({defaultLayout: 'main'});

app.use(express.static(__dirname + '/public')); 

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res){ 
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about');
})

app.use(function(req,res){  
	res.status(404);  
	res.render('404'); 
});

app.listen(app.get('port'), function(){ 
	console.log( 'Express Server Started on http://localhost:3000');

});