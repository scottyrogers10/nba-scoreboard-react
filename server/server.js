var express = require("express");
var app = express();
var request = require("request");

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, PATCH, POST, DELETE");
    response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get("/proxy", function (req, res) {
    var url = req.query.url;
    req.pipe(request(url)).pipe(res);
});

app.listen(3005, function () {
    console.log("Server is running on port 3005");
});