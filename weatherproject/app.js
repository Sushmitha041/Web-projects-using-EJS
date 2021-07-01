const express= require('express');
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
   
   res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req, res){
    console.log(req.body.cityName);

    const query = req.body.cityName;
    const apikey = "36ab180dd82b2c35b7c596abd789062c";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&appid="+apikey+"&units="+unit;
    https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
        const weatherdata = JSON.parse(data);
        // console.log(weatherdata);
        var temp = weatherdata.main.temp;
        var description = weatherdata.weather[0].description;
        const icon = weatherdata.weather[0].icon;
        const imageURL =  "http://openweathermap.org/img/wn/" +icon +"@2x.png";

        res.write(" <h1>The temperature in "+ query+" is "+ temp +"degree celcius</h1>");
        res.write("<p>The weather description is : "+ description +"</p>");
        res.write("<img src="+imageURL+">");
        res.send();
    })
});
});




app.listen(3000, function(){
    console.log("Server started at port 3000");
});