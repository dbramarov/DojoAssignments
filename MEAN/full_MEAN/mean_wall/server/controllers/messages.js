var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = {

	getMess: function(req, res){
		Message.find().populate('comments').exec(function(err, messages){
			if(err){
				console.log(err);
			}
			res.json(messages);
		})
	},

	newMessage: function(req, res){
		Message.create({user: req.params.user, message: req.body.text}, function(err, message){
			if(err){
				res.json(err);
			}
			else{
				res.json(message);
			}
		})
	},
}