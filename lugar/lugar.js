const axios = require('axios');


const getLugarLatLng = async(lugar) => {
    const encodedUrl = encodeURI(lugar);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '9gYg4Z7tD9mshq3qzP9gTT0Y2JTup1FXtAxjsnyQovWAToKskc' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para  ${lugar}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}