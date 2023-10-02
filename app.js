const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Configurar rutas
app.use('/', routes(io));

module.exports = app;