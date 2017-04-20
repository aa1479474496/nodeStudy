var express = require('express');

var app = express();

//设置handlebars视图引擎
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

var fortunes = [
    "Conquer your fears or they will conquer you.克服你的恐惧，否则他们将征服你",
    "Rivers need springs.河流需要泉水",
    "Do not fear what you don't know.不要害怕你不知道的",
    "You will have a pleasant surprise.你会有一个惊喜",
    "Whenever possible, keep it simple.只要有可能，保持简单",
];
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {
    var randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
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