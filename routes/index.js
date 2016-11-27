var newbooks = require('../newbooks.json');

exports.home = function(req, res) {
	var books = newbooks.books;
	res.render('home', {
		title: "Новинки",
		books: books
	});
};

exports.singlebook = function(req, res) {

	var code = req.params.id;

	var books = newbooks.books;

	if (code >= 1 && code <= 6) {
		var book = books[code - 1];

		res.render('singlebook', {
			title: "Зустрічайте новинки",
			books: books,
			book: book
		});
	} else {
		res.send('<body style="width: 100%; height: auto; background-color: black"><h3 style="width: 500px; height: auto; margin: 15 auto; color: white">Такая новинка на данный момент отсутствует!</h3></body>')
	}

};

exports.default = function(req, res) {
	res.send("Sorry, this page is not existed");
};