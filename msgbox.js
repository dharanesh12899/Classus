var http = require('http');
var querystring = require('querystring');
var qs;
http.createServer(function(req, res) {
    var data1 = '';
    req.on('data', function(chunk) {
        data1 += chunk;
    });
    req.on('end', function() {
        qs = querystring.parse(data1);
        console.log(qs);
        message = qs['msg'];
        radio = qs['options'];
        if (radio == 'Whole Department') {
            whole_branch = qs['whbr'];
            res.write("Whole Branch : " + whole_branch);
        }
        if (radio == 'Specific Class') {
            spfbr = qs['brtosnd'];
            spfsec = qs['clstosnd'];
            spfy = qs['yeartosend'];
            res.write("Specific Branch : " + spfbr + " Specific Section : " + spfsec + " Specific Year : " + spfy);
        }
        if (radio == 'Specific Year') {
            spfyear = qs['wholeyr'];
            res.write("Whole Year : " + spfyear);
        }
        res.end();
    });
}).listen(7790);
console.log("Hi");