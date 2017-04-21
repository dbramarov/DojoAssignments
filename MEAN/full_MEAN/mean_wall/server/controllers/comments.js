var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = {

	newComment: function(req, res){
		//Find a message by id and set = to 'message' variable:
		Message.findOne({_id: req.params.id}, function(err, message){
			if(err){
				res.json(err)
			}
			//Create a comment with user, comment and message id, save as variable comment:
			Comment.create({user: req.params.user, comment: req.body.comment, _post: message._id}, function(err, comment){
				if(err){
					res.json(err);
				}
				else{
					//push newly created comment into the message models comments field and save them!  
					message.comments.push(comment)
					message.save()
				}
				res.json(comment)
			})
		})
	}
}