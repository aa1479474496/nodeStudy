var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.send('home');
});



app.get('/foo',
    function(req, res, next) {
        if (Math.random() < 0.33) {
            return next();
        }
        res.send('red');
    },
    function(req, res, next) {
        if (Math.random() < 0.5) {
            return next();
        }
        res.send('green');
    },
    function(req, res) {
        res.send('blue');
    }

);

//路由路径和正则表达式

app.get('/user(name)?', function(req, res) {
    res.send('user');
});

app.get('/khaa+n', function(req,res){
    res.send('khaaan');
});

app.get(/crazy|mad(ness)?|lunacy/, function(req,res){
    res.send('madness');
});

app.listen(3000, function() {
    console.log(' http://localhost:3000');
});