var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var db = require("mongojs")("stuprodb");
if (db) {
    console.log("Connected!!!");
} else {
    console.log("Error!!!");
}
app.use(bodyParser.urlencoded({ extended: true }));

var reg;
app.post('/ex', function(req, res) {
    var email = req.body.email;
    db.stuproc.find({ 'email': email }).toArray(function(err, result) {
        if (err) throw err
        result.forEach(function(re) {
            reg = re.registernumber;
            res.send(re);
        });
    });
});


app.listen(7600);
console.log("Connected");