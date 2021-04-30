var express = require('express');
var app = express();

app.use(function(req, res, next) {
  var log = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(log);
  next();
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
  var message = {"message": "Hello json"};
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message.message = message.message.toUpperCase();
  }
  res.json(message);
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({time: req.time});
});































 module.exports = app;
