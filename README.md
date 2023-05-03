# Real Time Weather Updates With A  Raspberry PI

## How the data is stored

A file named `weather.json` will be created in the same directory. Data included will be temperature (in celcius), humidity, and time stamp. Then, the file will be pushed to a public AWS S3 bucketed which can be accessed by other programs.


## Contable Job
The program will run every 15 minutes to give a weather update

pull up the crontab for edit
> sudo crontab -e 

set the time to be every 15 minutes in the format of min/hr/day/month/year
>15 * * * *
