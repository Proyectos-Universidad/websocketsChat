const socketIO = require('socket.io');

module.exports = (server) => {
  let io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
      io.emit('new-message',message);
      console.log(message);
    });
  

  });
}; 

