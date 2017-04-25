var a = 'about';

exports.home = function(req, res) {
    res.send('home');
}

exports.about = function(req, res) {
    res.send(a);
}