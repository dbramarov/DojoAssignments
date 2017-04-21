var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){

	app.get('/mess', function(req, res){
		messages.getMess(req, res);
	});

	app.post('/login', function(req, res) {
		users.login(req, res);
	});

	app.post('/message/:user', function(req, res){
		messages.newMessage(req, res);
	});

	app.post('/comment/:id/:user', function(req, res){
		comments.newComment(req, res);
	});

}