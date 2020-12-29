import apiKey from './apikey.js';

const zip = 55455;
fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`)
    .then(result => result.json())
    .then(console.log)
