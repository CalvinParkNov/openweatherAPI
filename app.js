const express = require("express");
const https = require("https");


const app = express();

app.get("/", (req, res)=>{

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=ac8d0769f69979bd5a8d7fc0818b06ee";

  https.get(url, function(response){

    response.on("data", (data)=>{

      const weatherData = JSON.parse(data);

      console.log(weatherData);

      const temp1 = weatherData['main']['temp'];
      const temp2 = weatherData.main.temp

      const feels_like = weatherData.main.feels_like;

      const desc = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;


      const image = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";



      console.log(temp1);
      console.log(temp2);
      console.log(feels_like);
      console.log(desc);
 
      res.write("<h1>The Temperature in Seoul is " + temp1 + " Celcius.</h1>");
      res.write("<p>It feels like " + feels_like + ". Description is " + desc +".<p>");
      res.write("<img src=" + image +">");
      res.send()
    })
  })
})




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});