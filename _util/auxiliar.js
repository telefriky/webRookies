'use strict';

// Modulo de funciones auxiliares o de servicio
const path = require('path');
const fs = require('fs');
const https = require('https');
const { networkInterfaces } = require('os');

/**
 * Lee fichero y retorna su contenido
 *
 * @param {*} relPath  -> ubicacion relativa al path de ejecucion
 * @return {*} 
 */
function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath));
}

/**
 * Guarda un fichero en ubicacion determinada
 * ubicacion contiene la ruta completa del fichero
 * data es el contenido del fichero
 * 
 * @param {*} ubicacion  ->  ruta completa del fichero
 * @param {*} data      -> informacion a guardar
 * @return {*}          -> codigo de ejecucion de writeFile
 */
function saveFile(ubicacion, data) {

    return fs.writeFile(ubicacion, data, (err) => {
        if (err) throw err;
        //console.log(`Fichero:  ${ubicacion} guardado.`);
    });

}

/**
 * Descarga imagen a partir de una URL y la almacena en ruta relativa
 * Crea carpeta destino si no existe
 *
 * @param {*} relPath
 * @param {*} url
 * @param {*} nombre
 */
function descargaImagen(url, relPath, nombre) {
    // TODO: preparar para http y https
    //const http = require('http');

    if (!fs.existsSync(relPath)) {
        fs.mkdirSync(relPath);
    }

    let ubicacion = path.join(__dirname, relPath, nombre);

    const file = fs.createWriteStream(ubicacion);

    const request = https.get(url, function (response) {
        response.pipe(file);
    });
}

// obtener mi direccion IPv
// https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
//
const myip = () => {
    const nets = networkInterfaces();
    const results = Object.create(null); // Or just '{}', an empty object

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    return results
}

module.exports = { bufferFile, saveFile, descargaImagen, myip }
// https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
// module.exports = { replaceStr }
// exports.replaceStr = replaceStr