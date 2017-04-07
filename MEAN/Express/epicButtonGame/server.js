var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(3000, function() {
 console.log("listening on port 3000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  
  socket.on("posting_form", function (data){
    console.log(data);
    io.emit('server_response', {response: data});
	})
   socket.on("reset", function (data){
   	console.log(data);
    io.emit('s_response', {response: data});
	})
})

