var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/static')));

app.get('/', function(request, response) {
    response.render('index.html');
})

app.get('/cats', function(request, response) {
    response.render('cats.html');
})

app.get('/cars', function(request, response) {
    response.render('cars.html');
})

app.listen(8000, function() {
    console.log("server is running");
})
