var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.post('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log(socket.id);
  
  socket.on("posting_form", function (data){
    console.log(data);
    socket.emit('server_response', {response: data});
    socket.emit('random_number', {num: Math.floor(Math.random()*100)+ 1});
	})
})

