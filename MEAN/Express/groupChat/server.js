var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var arr = [];

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

  	var name;

  socket.on("ok_clicked", function (data){
    console.log(data.name);
    console.log(arr);
    name = data.name;
    socket.emit('server_name_response', {arr: arr});
    io.emit('everybody', {name: name});
	})

   socket.on("message_sub", function (data){
   	console.log(data.message);
   	arr.push("<p>"+name+ ": " + data.message+"</p>");
    io.emit('message_response', {response: data.message, name: name});
	})
})

