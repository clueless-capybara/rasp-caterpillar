'use strict';

const{ getWeatherData } = require('./sensor')
const { pushToS3 } = require('./pushToS3');

try{
  getWeatherData()
  pushToS3()

}catch(e){
  console.error('ERR: ', e)
}

