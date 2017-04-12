var express = require('express');
var app = express();

//************MONGO***************
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var PostSchema = new Schema({
 poster: { type: String, required: true, minlength: 4},
 post: { type: String, required: true },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true})

var CommentSchema = new Schema({
  commenter: { type: String, required: true, minlength: 4 },
  comment: { type: String, required: true },
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
}, {timestamps: true})

mongoose.model('Post', PostSchema); 
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment'); 
//***********************************

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  Post.find().populate("comments").exec(function(err, posts){
    if(err) {
      console.log('something went wrong');
    } 
    res.render('index', {posts: posts});
  })
})

app.post('/post', function(req, res) {
    console.log("POST DATA", req.body);
  	var post = new Post({poster: req.body.name, post: req.body.post});
  	// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
 	  post.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } 
    res.redirect('/');
  });
})

app.post('/post/:id/comment', function(req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
    if(err) {
      console.log(err);
    }
    var comment = new Comment({commenter: req.body.name, comment: req.body.comment, _post: req.params.id});
    console.log(comment);
    comment.save(function(err){
      if(err) {
        console.log(err);
      }
      post.comments.push(comment);
      post.save(function(err){
        if(err) {
          console.log(err);
        }
        res.redirect('/');        
      })
    })

  })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})