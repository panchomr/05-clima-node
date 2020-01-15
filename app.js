const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// clima.getClima(-38.990002, -72.639999)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El Clima de ${coordenadas.direccion} es de ${temperatura} °C.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


    // el clima de XXXX es de XX
}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });