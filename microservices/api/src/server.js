var express = require('express');
var app = express();
var router = express.Router();

var server = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('Hello World-Ankita');
});

// Uncomment to add a new route which returns hello world as a JSON
app.get('/api/winloss', function(req, res) {
  res.json({
    "rcb": {
      win: 5,
      loss: 12,
      draw: 2
    },
    "mumbai indians": {
      win: 5,
      loss: 12,
      draw: 2
    },
    "Sunrisers Hyderabad": {
      win: 2,
      loss:19,
      draw:8
    },
    "Rising Pune Supergiant": {
      win:4,
      loss: 19,
      draw:6
    },
    "Kings XI Punjab": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Gujarat Lions": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Delhi Daredevils": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Deccan Chargers": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Rajasthan Royals": {
      win: 5,
      loss: 20,
      draw: 8
    },
    "Chennai Super Kings": {
      win: 5,
      loss: 20,
      draw: 8
    },
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
