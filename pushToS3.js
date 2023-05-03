const { PutObjectCommand, S3Client } = require('@aws-sdk/client-s3');

const client = new S3Client({ region: 'us-west-2' });
const fs = require('fs');

async function pushToS3() {

  await fs.readFile('/home/pi/temp-sensor/weather.json', 'utf8', async (err, data) => {
    if (err) { throw err };

    console.log('WEATHER DATA ', data);

    const command = new PutObjectCommand({
      Bucket: "weather-data-capybara",
      Key: "weather.json",
      Body: data,
    });

    try {
      const response = await client.send(command);
      console.log('SENT WEATHER DATA: ', response);
    } catch (err) {
      console.error(err);
    }


  })
};


module.exports = {
  pushToS3
}
