const path = require('path');

// Servir la página de display en la ruta '/display'
function serveDisplayPage(req, res) {
    res.render('display', { title: 'Display Page' });
}

// Manejar eventos de control desde la ventana de display
function handleDisplayEvents(io, socket) {


    // Agregar aquí la lógica para manejar eventos desde la ventana de display
}


module.exports = {
    serveDisplayPage,
    handleDisplayEvents,
};
