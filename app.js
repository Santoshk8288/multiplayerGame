var express = require('express');
var app 		= express();
var serv 		= require('http').Server(app)

app.use('/client',express.static(__dirname+'/client'))

app.get('/', function(req, res){
	res.sendFile(__dirname+'/client/index.html');
})

serv.listen(3000, function(){
	console.log('server running at '+3000);
})


var SOCKET_LIST = {}
var io = require('socket.io')(serv,{});

io.sockets.on('connection', function(socket){
	socket.id = Math.random()
	socket.x = 0
	socket.y = 0
	SOCKET_LIST[socket.id] = socket
	console.log('connected')
})