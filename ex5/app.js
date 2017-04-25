var express = require('express');
var app = express();

app.use(function(req, res, next) {
    var d = new Date();
    console.log('Time:',d.toLocaleDateString(),d.toLocaleTimeString());
    next();
});

app.use('/user/:id', function(req, res, next) {
    console.log('Request Type', req.method);
     console.log('ID:', req.params.id);
    next();
});

app.get('/', function(req, res, next) {
    res.send('home');
});
app.use('/', function(req, res, next) {
    console.log(1122);
});

app.get('/user/:id', function(req, res, next) {
    res.send('USER');
});


app.listen(3000, function() {
    console.log('Express started on http://localhost:3000');
});