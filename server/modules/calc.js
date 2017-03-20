var express = require('express');
var router = express.Router();

router.post('/add', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  var result = add(parseInt(data.x), parseInt(data.y));
  response.result = result;
  res.send(response);
});

router.post('/subtract', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  var result = parseInt(data.x) - parseInt(data.y);
  response.result = result;
  res.send(response);
});

router.post('/multiply', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  var result = parseInt(data.x) * parseInt(data.y);
  response.result = result;
  res.send(response);
});

router.post('/divide', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  var result = parseInt(data.x) / parseInt(data.y);
  response.result = result;
  res.send(response);
});

router.get('/', function(req, res) {
  res.send('Hello');
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

module.exports = router;
