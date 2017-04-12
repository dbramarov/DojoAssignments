var api = require('../controllers/logic.js')

module.exports = function(app){
	app.get('/', function(req, res){
		api.index(req, res)
	})
	app.get('/new/:name/', function(req, res){
		api.create(req, res)
	})
	app.get('/remove/:name/', function(req, res){
		api.remove(req, res)
	})
	app.get('/:name', function(req, res){
		api.show(req, res)
	})

}