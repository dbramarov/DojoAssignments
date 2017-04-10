var express = require('express');
var app = express();

//************MONGO***************
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/owl_dash');
var OwlSchema = new mongoose.Schema({
 name: String,
 age: Number,
 speed: String,
}, {timestamps: true})
mongoose.model('Owl', OwlSchema); 
var Owl = mongoose.model('Owl');
//***********************************

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  Owl.find({}, function(err, owl){
    if(err) {
      console.log(err);
    }
    else {
      console.log(owl);
      res.render('index', {owl: owl});
    }
  })
})

app.get('/new', function(req, res){
    res.render('new');
})

app.get('/edit/:id', function(req, res){
  Owl.findOne({_id: req.params.id}, function(err, owl){
    if(err) {
      console.log(err);
    }
    else {
      console.log(owl);
      res.render('edit', {owl:owl})
    }
  })
})

app.post('/editOwl/:id', function(req, res){
  Owl.update({_id: req.params.id}, {$set: {"name": req.body.name,"age": req.body.age,"speed": req.body.speed}}, function(err, owl){
      res.redirect('/')
  });
})


app.post('/owl', function(req, res) {
    console.log("POST DATA", req.body);
  	var owl = new Owl({name: req.body.name, age: req.body.age, speed: req.body.speed});
 	  owl.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else { 
      console.log('successfully added a owl!');
      res.redirect('/');
	  }
  });
})

app.get('/owl/:id', function(req, res){
  Owl.findOne({_id: req.params.id}, function(err, owl){
    if(err) {
      console.log(err);
    }
    else {
      console.log(owl);
      res.render('display', {owl:owl})
    }
  })
})

app.get('/delete/:id', function(req, res){
  Owl.deleteOne({_id: req.params.id}, function(err, owl){
    if(err) {
      console.log(err);
    }
    else {
      console.log(owl);
      res.redirect('/')
    }
  })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})