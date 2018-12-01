var express=require('express');
var socket=require('socket.io');

//App setup
var app=express();
var server=app.listen(process.env.PORT, function(){
    console.log('listening to request on prt 4000');
});

//Static files
app.use(express.static('public'));

//Socket set up
var io=socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    });
});