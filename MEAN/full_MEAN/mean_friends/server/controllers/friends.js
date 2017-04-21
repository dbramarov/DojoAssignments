var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req,res){
    Friend.find({}, function(err, friends){
        if(err) {
          console.log(err);
        }
        console.log(friends);
        res.json(friends);     
    })
  },
  create: function(req,res){
    console.log("POST DATA", req.body);
    var friend = new Friend({first_name: req.body.fname, last_name: req.body.lname, birthday: req.body.birthday});
    friend.save(function(err) {
        if(err) {
            console.log('something went wrong');
            res.json({err});
        } 
        console.log('successfully added a Friend!');
        res.json({friend});
      })
  },
  update: function(req,res){
    console.log(req.body);
    Friend.update({_id: req.params.id}, req.body, function(err, friend){
        res.json(friend);
    });
  },
  delete: function(req,res){
    Friend.deleteOne({_id: req.params.id}, function(err, friend){
        if(err) {
            console.log('something went wrong');
            res.json({err});
        }
        console.log('successfully deleted a Friend!');
        res.json({friend});
    })
  },
  show: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err) {
        console.log('something went wrong');
        res.json({err});
        }
        console.log('successfully Found a Friend!');
        res.json(friend);
    })
  }
}