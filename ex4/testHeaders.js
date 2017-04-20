var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/headers', function(req, res) {
    res.set('Content-Type', 'text/plain');
    var s = '';
    
    for (var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    console.log(s);
    res.send(s);
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port'));
});