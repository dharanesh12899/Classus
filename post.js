var http = require('http');
var exp=require('express');
var app=exp();
var querystring = require('querystring');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.post('/lo',function(req,res){
        //name = req.body.username;
        var a=req.body.username;
        console.log(a);
        res.send(a);
    });
app.listen(8000);

console.log("Server started");