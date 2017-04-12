var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
	index: function(req, res){
		People.find({}, function(err, people){
			res.json(people);
		})

	},
	create: function(req, res){
		var person = new People({name: req.params.name})
		person.save(function(err){
			if(err) {
	      		console.log('something went wrong');
	    	} 
	    	else { 
	      		console.log('successfully added a person!');
	      		res.redirect('/');
		  	}
		})
	},
	remove: function(req, res){
		People.deleteOne({name: req.params.name}, function(err, people){
			if(err) {
	      		console.log(err);
	    	}
	    	else {
	      		console.log(people);
	      		res.redirect('/')
	    	}
		})
	},
	show: function(req, res){
		People.findOne({name: req.params.name}, function(err, people){
			if(err) {
	      		console.log(err);
	    	}
	    	else {
	      		console.log(people);
	      		res.json(people)
	    	}			
		})
	}

}
