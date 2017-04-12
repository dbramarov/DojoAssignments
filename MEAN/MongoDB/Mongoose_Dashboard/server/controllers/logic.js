var mongoose = require('mongoose');
var Owl = mongoose.model('Owl');

module.exports = {
	index: function(req, res){
		Owl.find({}, function(err, owl){
		    if(err) {
		      console.log(err);
		    }
		    else {
		      console.log(owl);
		      res.render('index', {owl: owl});
		    }
	  	})
	},
	edit: function(req, res){
		Owl.findOne({_id: req.params.id}, function(err, owl){
		    if(err) {
		      console.log(err);
		    }
		    else {
		      console.log(owl);
		      res.render('edit', {owl:owl})
		    }
	  	})
	},
	editOwl: function(req, res){
		Owl.update({_id: req.params.id}, {$set: {"name": req.body.name,"age": req.body.age,"speed": req.body.speed}}, function(err, owl){
	    res.redirect('/')
	  });
	},
	create: function(req, res){
		console.log("POST DATA", req.body);
	  	var owl = new Owl({name: req.body.name, age: req.body.age, speed: req.body.speed});
	 	owl.save(function(err) {
	    	if(err) {
	      		console.log('something went wrong');
	    	} 
	    	else { 
	      		console.log('successfully added a owl!');
	      		res.redirect('/');
		  	}
	  	});
	},
	getOwl: function(req, res){
		Owl.findOne({_id: req.params.id}, function(err, owl){
	    	if(err) {
	      		console.log(err);
	    	}
	    	else {
	      		console.log(owl);
	      		res.render('display', {owl:owl})
	    	}
	  	})
	},
	delete: function(req, res){
		Owl.deleteOne({_id: req.params.id}, function(err, owl){
	    	if(err) {
	      		console.log(err);
	    	}
	    	else {
	      		console.log(owl);
	      		res.redirect('/')
	    	}
	  	})
	}
}