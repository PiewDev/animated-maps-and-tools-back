const socketIO = require('socket.io');
const videoController = require('./controllers/videoController');
const controlsController = require('./controllers/controlsController');
const displayController = require('./controllers/displayController');

function configureSocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    // Manejar eventos de control desde la ventana de controles
    controlsController.handleControlEvents(io, socket);

    // Manejar eventos de control desde la ventana de display
    displayController.handleDisplayEvents(io, socket);

    // Manejar eventos de control desde la ventana de video
    videoController.handleVideoEvents(io, socket);

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
}

module.exports = configureSocket;
