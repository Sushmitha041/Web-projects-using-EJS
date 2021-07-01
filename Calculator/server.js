const express = require('express');
const app = express();

app.get("/",function(req, res){
    // console.log(request);
    res.send("<h1>Hello Sushmitha!!</h1>");
});

app.get("/contact",function(req, res){
    res.send("Contact me : sushtp@gmmail.com");
});

app.get("/about", function(req,res){
    res.send("Hey there..!<br> <h1> Im Sushmitha</h1>");
});

app.get("/idgaf",function(req, res){
    res.send("I dont give a fuck");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});