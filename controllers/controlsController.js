// controlsController.js
const path = require('path');
const { getVideoList } = require('../Services/videoManager.js'); // Asegúrate de tener la ruta correcta

async function serveControlsPageWithVideos(req, res) {
    try {
        let videoList = await getVideoList();
        console.log(videoList);
        res.render('index', { videos: videoList });
    } catch (error) {
        console.error('Error obteniendo la lista de videos:', error);
        res.status(500).send('Error obteniendo la lista de videos.');
    }
}

function handleControlEvents(io, socket) {
    socket.on('playPause', () => {        
        console.log('Play/Pause');
        io.emit('playPauseVideo');
    });

    socket.on('changeGridType', (selectedGridType) => {
        console.log('Tipo de cuadrícula seleccionado:', selectedGridType);
        io.emit('applyGridType', selectedGridType);
    });

   
}

module.exports = {
    serveControlsPageWithVideos,
    handleControlEvents,
};
