const express= require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){

    var number1 = Number(req.body.num1);
    
    var number2 = Number(req.body.num2);
    
    var result = number1 + number2;
    
    // var result1 = result.toString();
    
    res.send(result.toString());
});

app.get("/bmicalculator",function(req, res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var res = (w)/(h*h);

    console.log(res);
    res.send("your bmi"+res);
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});