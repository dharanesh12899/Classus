var http = require('http');
var express = require("express");
var db = require("mongojs")("stuprodb");
const formidable = require('formidable');
const bodyParser = require('body-parser');
var fs = require("fs-extra");
var app = express();

var tg;
if (db) {
    console.log("Connected!!!");
} else {
    console.log("Error!!!");
}

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", function(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        d1 = fields.t1;
        d2 = fields.t2;
        d3 = fields.t3;
        d4 = fields.t4;
        d5 = fields.t5;
        d6 = fields.t6;
        d7 = fields.t7;
        d8 = fields.t8;
        d9 = fields.t9;
        d10 = fields.t10;
        d11 = fields.t11;
        d12 = fields.t12;
        d13 = fields.t13;
        d14 = fields.t14;
        d15 = fields.t15;
        d16 = fields.t16;
        d17 = fields.t17;
        d18 = fields.t18;
        d19 = fields.t19;
        d20 = fields.t20;
        d21 = fields.t21;
        d22 = fields.t22;
        d23 = fields.t23;
        d24 = fields.t24;
        d25 = fields.t25;
        d26 = fields.t26;
        d27 = fields.t27;
        d28 = fields.t28;
        d29 = fields.t29;
        d30 = fields.t30;
        d31 = fields.t31;
        d32 = fields.t32;
        d33 = fields.t33;
        d34 = fields.t34;
        d35 = fields.t35;
        d36 = fields.t36;
        d37 = fields.t37;
        d38 = fields.t38;
        d39 = fields.t39;
        d40 = fields.t41;
        d42 = fields.t42;
        var oldpath = files.t40.path;
        console.log(oldpath);
        var picname = d2 + ".jpg";
        var newpath = 'Uploads/propics';
        fs.rename(oldpath, newpath + '/' + picname, function(err) {
            if (err) return console.error(err)
            console.log("file uploaded!");
        });
        if (d2 != null) {
            db.stuproc.update({ "registernumber": d2 }, { $set: { "name": d1, "registernumber": d2, "dob": d3, "age": d4, "gender": d5, "fathername": d6, "fatheroccupation": d7, "address": d8, "phonenumber": d9, "email": d10, "teth": d11, "tethschoolname": d12, "twth": d13, "twthschoolname": d14, "ugo": d15, "ugt": d16, "ugth": d17, "ugf": d18, "ugfi": d19, "ugs": d20, "ugse": d21, "uge": d22, "cgpa": d23, "additionalcoursesdone": d24, "paperspresented": d25, "projectpresented": d26, "paperswon": d27, "projectswon": d28, "workshopsattended": d29, "implant": d30, "internships": d31, "memberofclubs": d32, "sportsinterestedin": d33, "sportsachievements": d34, "performedonstagein": d35, "talentachievements": d36, "volunteeredin": d37, "personalprojects": d38, "branch": d39, "year": d40, section: d42 } }, { upsert: true });
        } else {
            console.log("fail!");
        }
    });
    res.end();
});
app.listen(7705);
console.log("Server started Successfully");