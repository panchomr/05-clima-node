const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=511fcad182654e43bd947d6a19a50ef6&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}