var express = require('express');
var app = express();

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


































 module.exports = app;
