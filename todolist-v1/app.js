//jshint esversion:6


const express =require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const date = require(__dirname + "/date.js")

// console.log(date());

let newjobs =[];
let worklist=[];
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    // res.sendFile(__dirname + "/index.html");
    let day = date.getDay();
  
    res.render("list",{listTitle : day, newItems : newjobs }); 
});  

app.post("/",function(req,res){

    // console.log(req.body);
    let newjob = req.body.userdata;

    if(req.body.list === "Work")
    {
        worklist.push(newjob);
        res.redirect("/work");
    }
    else
    {
        newjobs.push(newjob);
        res.redirect("/");
    }

    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle : "Work List", newItems : worklist});
});

app.post("/work",function(req,res){
    let workjob = req.body.userdata;
    worklist.push(workjob);
    res.redirect("/work");
});

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("Server started at port 3000");
}); 