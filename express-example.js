var express = require('express');
var app = express();
app.set('view engine', 'pug');

//Lookup a method for handling status codes that isn't with magic numbers.
app.route('/Api')
    .get(function(request, response) {
        response.send('Tutorial on Node');
    })
    .post(function(request, response) {
        response.send('Posted to tutorial on Node');
    })
    .put(function(request, response) {
        response.response.send('Put to tutorial on Node');
    })
    .delete(function(request, response) {
        response.statusCode = 202;
        response.send('it was deleted');
    });

app.route('/Angular').get(function(request, response) {
    response.render('index', {
        title: 'Angular tutorial',
        message: 'Welcome to the Angular Tutorial'
    });
});

app.route('/').get(function(request, response) {
    response.send('Welcome to Guru99 Tutorials');
});

var server = app.listen(3000, function() {});
