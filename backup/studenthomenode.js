var express = require('express');
var app = express();
var db3 = require("mongojs")("notsample");
const formidable = require('formidable');

if (db) {
    console.log("Connected!!!");
} else {
    console.log("Error!!!");
}


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.post('/fetchmsg', function(req, res) {
    const form = new formidable.IncomingForm();
    var msg = [];
    form.parse(req, function(err, fields, files) {

        year = fields.year;
        console.log(year);
        db.notsa.find().toArray(function(err, result) {
            if (err) throw err
            result.forEach(function(re) {
                mesg = re.message;
                msg.push({ message: mesg });
            });
            console.log(msg);
            res.send(msg);
        });
    });
});
app.listen(7773);
console.log("Connected");