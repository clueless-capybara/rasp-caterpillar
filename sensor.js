const sensor = require("node-dht-sensor");
const fs = require('fs');

function getWeatherData() {
  sensor.read(22, 17, function(err, temperature, humidity) {

    let data = {
      temperature: '',
      humidity: '',
      timeStamp: (new Date(Date.now())).toLocaleString(),
    };
    if (!err) {
      console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
      data['temperature'] = temperature;
      data['humidity'] = humidity;

      fs.writeFile('/home/pi/temp-sensor/weather.json', JSON.stringify(data), (err)=>{
        if (err){throw err};
        console.log('file made with data ', data)
      });
    
      console.log('READING DATA: ', data)
      // return data
    
    
    }
  });
  
}

module.exports = {
  getWeatherData
}