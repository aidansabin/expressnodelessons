var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.json({
    echo: word
  });
});

app.get("/name", (req, res) => {
  const name = req.query.first + ' '+ req.query.last;
  res.json({
    name: name
  });
});

app.post("/name", (req, res) => {
  var string = req.body.first + ' ' + req.body.last;
  res.json({ name: string });
});

























 module.exports = app;
