// videoManager.js
const fs = require('fs');
const path = require('path');

const videoFolderPath = path.join('public/videos'); // Cambia 'public' con la carpeta real de tus videos

function getVideoList() {
    try {
        const files = fs.readdirSync(videoFolderPath);
        console.log(videoFolderPath);
        return files;
    } catch (error) {
        console.error('Error obteniendo la lista de videos:', error);
        return [];
    }
}

module.exports = {
    getVideoList,
};
