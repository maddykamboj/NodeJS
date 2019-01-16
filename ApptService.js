var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

function allowCORS(httpReq, httpRes) {
    httpRes.setHeader('Access-Control-Allow-Methods', '*');
    httpRes.setHeader('Access-Control-Allow-Origin', '*');
    if (httpReq.headers['access-control-request-headers']) {
        httpRes.setHeader('Access-Control-Allow-Headers', httpReq.headers['access-control-request-headers']);
    }
}

var express = require('express');
var app = express();
app.get('/appointments', function (req, res) {
    allowCORS(req, res);
 var data = {name: "Default Name", phoneNum: "XXX-XXX-XXXX"}
    res.send(data);
});

app.listen(8080, function () {
    console.log('Serving Default Data for Appt Scheduling Service on port 8080!');
});
