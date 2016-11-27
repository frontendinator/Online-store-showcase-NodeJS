var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
var port = process.env.PORT || 7500;
var routes = require('./routes');

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'ejs');

app.get('/', routes.home);

app.get("/products/:id", routes.singlebook);

app.get('*', routes.default);

app.listen(port, function() {
	console.log("The application is running at localhost 7500");
});