var express = require('express');
var handlebars = require('experess-handlebars');


var app = express();


//setup handlebars

// setup handlebars
var view = handlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', view.engine);
app.set('view engine', 'handlebars');

// setup static serving
app.use(express.static(__dirname + '/public'));

//call to home handlebars to show homepage

app.get('/',(req, res) =>{

	res.render('home');
});

//Error routes

app.use((req, res) => {
        res.status(404);
	res.render('404');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

//// Application startup

app.listen(app.get('port'), () => {
	console.log('Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate');
																						
});



