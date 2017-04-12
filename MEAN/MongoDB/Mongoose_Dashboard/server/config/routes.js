var owl = require('../controllers/logic.js')

module.exports = function(app){
	
	app.get('/', function(req, res) {
		owl.index(req, res);
	})
	app.get('/new', function(req, res){
	    res.render('new');
	})
	app.get('/edit/:id', function(req, res){
		owl.edit(req, res);
	})
	app.post('/editOwl/:id', function(req, res){
		owl.editOwl(req, res);
	})
	app.post('/owl', function(req, res) {
		owl.create(req, res);
	})
	app.get('/owl/:id', function(req, res){
		owl.getOwl(req, res);
	})
	app.get('/delete/:id', function(req, res){
		owl.delete(req, res);
	})
}