const http = require('http');
const app = require('./app');
const socketIO = require('socket.io');

const videoController = require('./controllers/videoController');
const controlsController = require('./controllers/controlsController');
const displayController = require('./controllers/displayController');


const server = http.createServer(app);
const PORT = 3000;

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

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});