const express = require('express');
const videoController = require('./controllers/videoController');
const controlsController = require('./controllers/controlsController');
const displayController = require('./controllers/displayController');

function configureRoutes() {
  const router = express.Router();

  router.get('/', (req, res) => {
    controlsController.serveControlsPageWithVideos(req, res);
  });

  router.get('/video/:videoFileName?', (req, res) => {
    const requestedVideoFileName = req.params.videoFileName || null;
    videoController.serveVideo(req, res, requestedVideoFileName);
  });

  router.get('/video', (req, res) => {
    videoController.serveVideo(req, res, null);
  });

  router.get('/display', (req, res) => {
    displayController.serveDisplayPage(req, res);
  });


  // ... Otras rutas ...

  return router;
}

module.exports = configureRoutes;
