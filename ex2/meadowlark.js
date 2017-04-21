var express = require('express');

var app = express();

//设置handlebars视图引擎
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {
    res.render('about', { layout: 'test' });
    // layout: null 不使用固定的模板
    //layout: 'test' 使用test.handlebars模板
});

//404 catch-all 处理器(中间件)
app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

//500错误处理器(中间件)
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port'));
});