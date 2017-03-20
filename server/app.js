var bodyParser = require('body-parser');
var express = require('express');
var calc = require('./modules/calc.js');
var app = express();
var port = 5000;

// Uses index.html by default.
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/calculator', calc);

app.listen(port, function(){
  console.log("Listening on port", port);
});
