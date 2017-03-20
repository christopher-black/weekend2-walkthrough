var bodyParser = require('body-parser');
var express = require('express');
var calc = require('./modules/calc.js');
var app = express();
var port = 5000;

// Uses index.html by default.
app.use(express.static('server/public'));

// Body parser is available in our routers too!
app.use(bodyParser.urlencoded({extended: true}));

// Set up our calculator router.
app.use('/calculator', calc);

// Listen on port 5000
app.listen(port, function(){
  console.log("Listening on port", port);
});
