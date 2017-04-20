var fortunes = [
    "Conquer your fears or they will conquer you.克服你的恐惧，否则他们将征服你",
    "Rivers need springs.河流需要泉水",
    "Do not fear what you don't know.不要害怕你不知道的",
    "You will have a pleasant surprise.你会有一个惊喜",
    "Whenever possible, keep it simple.只要有可能，保持简单",
];
exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};