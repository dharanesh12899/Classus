var express = require('express');
var app = express();
var db = require("mongojs")("notsample");
const formidable = require('formidable');
var fs = require("fs-extra");

if (db) {
    console.log("Connected!!!");
} else {
    console.log("Error!!!");
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/message', function(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {

        if (err) throw err;
        message = fields.msgsend;
        var date = new Date().toLocaleDateString();
        console.log(date);
        var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        type = fields.typeofsend;

        if (type == "Whole Department") {
            dep = fields.whbr;
            db.notsa.insert({ message: message, date: date, time: time, name: "Dharanesh", department: dep, year: "", section: "" }, function(err, resu) {
                if (err) throw err;
                if (resu) {

                    res.send("done");
                }
            });
            console.log(dep);
        } else if (type == "Specific Class") {
            dep = fields.brtosnd;
            cls = fields.clstosnd;
            yr = fields.yeartosend;
            db.notsa.insert({ message: message, date: date, time: time, name: "Dharanesh", department: dep, year: yr, section: cls }, function(err, resu) {
                if (err) throw err;
                if (resu) {

                    res.send("done");
                }
            });
            console.log(dep, cls, yr);
        } else if (type == "Specific Year") {
            yr = fields.wholeyr;
            db.notsa.insert({ message: message, date: date, time: time, name: "Dharanesh", department: "", year: yr, section: "" }, function(err, resu) {
                if (err) throw err;
                if (resu) {

                    res.send("done");
                }
            });
        }
    });
});

app.post("/file", function(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if (err) throw err;
        var date = new Date().toLocaleDateString();
        console.log(date);
        var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        console.log(time);
        dep = fields.ubrtosnd;
        cls = fields.uclstosnd;
        yr = fields.uyeartosend;
        sub = fields.subhan;
        var oldname = files.upfile.name;
        var oldpath = files.upfile.path;
        var newpath = 'Uploads/' + dep + '/' + yr + '/' + cls + '/' + sub + '/' + oldname;
        console.log(newpath);
        fs.rename(oldpath, newpath, function(err) {
            if (err) throw err;
            console.log("file uploaded!");
        });

        res.send("done");
    });
});

app.listen(7774);
console.log("Connected");