// UTILIDADES datos
// Creacion de ficehro datos para galeria a partir de los ficheros
// que tenemos en las carpetas correspondientes
//
// estructura del JSON resultante
/*
{
    "CONFIG": [
        {
            "ruta": "./"
        }
    ],
    "CATEGORIA": [
        {
          "thumbnail": "flag_foto_6.jpg",  // no se usa
          "imagen": "flag_foto_6.jpg"
        }
    ]
}
*/
const fs = require('fs');
const path = require('path');
const { saveFile } = require('./auxiliar');

const modoDebug = true;

// los nombres de categoria no pueden tener "_", se usar para separador
let resultado = {
    CONFIG: [
        {
            ruta: './'
        }
    ],
    FLAG: [],
    CADETE: [],
    JUNIOR: [],
    SRFEMENINO: [],
    SRMASCULINO: []
}

const nodoCategoria = {
    CATEGORIA: [
        {
            thumbnail: "flag_foto_6.jpg",  // no se usa
            imagen: "flag_foto_6.jpg"
        }
    ]
}

const getAllFiles = (dirPath = './', outFilename = './datos.json', recursivo = false) => {
    // Function to get current filenames
    // in directory
    // filenames = fs.readdirSync(dirPath)

    // console.log("\nCurrent directory filenames:");
    // filenames.forEach(file => {
    //     modoDebug && console.log(file);
    // });

    fileObjs = fs.readdirSync(dirPath, { withFileTypes: true });

    modoDebug && console.log("\nCurrent directory files:");
    fileObjs.forEach(file => {

        modoDebug && console.log('dirpath -> ', dirPath)
        modoDebug && console.log('file -> ', file.name)

        let filepath = path.join(dirPath, file.name);
        modoDebug && console.log('filepath -> ', filepath)

        procesarResultado(dirPath, file.name)

        let stat = fs.statSync(filepath);

        if (stat.isDirectory() && recursivo) {
            modoDebug && console.log('DIR -> ', filepath)
            getAllFiles(filepath);
        } else {
            modoDebug && console.log(filepath);
        }
    })

    const strData = JSON.stringify(resultado)
    saveFile(outFilename, strData);
    console.log(`Fichero ${outFilename} creado`);
}

// incoporar filename al objeto resultado
const procesarResultado = (dirPath, filename) => {

    // extraer categoria
    modoDebug && console.log(filename.includes('_') )
    if (!filename.includes('_')  ) return;
    modoDebug && console.log('seguimos')

    let categoria = filename.split("_")[0].toUpperCase();
    modoDebug && console.log('CATEGORIA: ', categoria)

    let nuevoNodo = { imagen: filename };

    modoDebug && console.log(Object.keys(resultado))
    modoDebug && console.log(resultado[categoria])
    resultado[categoria].push(nuevoNodo)
    modoDebug && console.log(resultado)

    modoDebug && console.log(categoria)
}

getAllFiles('../galeria/images/', 'datos_galeria.json');
//getAllFiles('../equipo/img/', 'datos_equipo.json');

