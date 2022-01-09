var express = require('express');
var app = express();
var db1 = require("mongojs")("logindb");
var db2 = require("mongojs")("stuprodb");
var db3 = require("mongojs")("notsample");
const bodyParser = require('body-parser');
if (db1) {
    console.log("Logindb Connected!!!");
} else {
    console.log("Error!!!");
}

if (db2) {
    console.log("Stuprodb Connected!!!");
} else {
    console.log("Error!!!");
}

if (db3) {
    console.log("Notdb Connected!!!");
} else {
    console.log("Error!!!");
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));

app.post("/lo", function(req, res) {
    var username = req.body.username;
    var pass = req.body.password;
    db1.logindet.find({ usermail: username }).toArray(function(err, result) {
        var ins;
        if (err) throw err;
        result.forEach(function(re) {
            if (re.password == pass) {
                ins = "login";
            } else {
                ins = "nologs";
            }
            res.send(ins);
        });
    });
});

var reg;
app.post('/ex', function(req, res) {
    var email = req.body.email;
    db2.stuproc.find({ 'email': email }).toArray(function(err, result) {
        if (err) throw err
        result.forEach(function(re) {
            res.send(re);
        });
    });
});

app.post('/fetchmsg', function(req, res) {
    var msg = [];
    year = req.body.year;
    db3.notsa.find().toArray(function(err, result) {
        if (err) throw err
        result.forEach(function(re) {
            mesg = re.message;
            dat = re.date;
            tim = re.time;
            name = re.name;
            year = re.year;
            department = re.department;
            section = re.section;
            msg.push({ name: name, message: mesg, date: dat, time: tim, year: year, department: department, section: section });
        });
        res.send(msg);
    });
});

app.post('/assig', function(req, res) {
    var num = "3";
    console.log(num);
    res.send(num);
});

app.listen(7772);
console.log("Server started Successfully");