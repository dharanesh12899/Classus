var express = require('express');
var app = express();
const formidable = require('formidable');
const bodyParser = require('body-parser');
var fs = require("fs-extra");
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/ex', function(req, res) {
    console.log("Done");
    var filenames;
    var paths;
    var size;
    var stat;
    var extn;
    var details = [];
    let directory_name = "profilepic/";
    fs.readdir(directory_name, function(err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach(function(file) {
            paths = directory_name + file;
            stat = fs.statSync(paths);
            size = (stat.size / 1000000).toFixed(2);
            filenames = file;
            extn = path.extname(filenames);
            details.push({ filename: filenames, size: size, path: paths, type: extn });
        });
        console.log(details);
        res.send(details);

    });
});
app.listen(7771);
console.log("Connected");