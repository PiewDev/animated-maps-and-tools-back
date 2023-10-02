const path = require('path');

// Servir el video en la ruta '/video'
function serveVideo(req, res, videoName) {
    var video = videoName || 'Church Tower Ruin Interior.mp4';
    console.log("se llama al video", video);
    const videoPath = path.join(__dirname, '..', 'public/videos', video );
    res.sendFile(videoPath);
}

function handleVideoEvents(io, socket) {

    socket.on('changeVideo', (video) => {
        console.log("se cambia el video", video)    
        // Emitir un evento a todas las ventanas del cliente con el nuevo video
        io.emit('videoChanged',video);
    });
}
module.exports = {
    serveVideo,
    handleVideoEvents
};