var express = require('express');
// Use our local router to respond to requests
var router = express.Router();

router.post('/', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  // Use our local function to add
  var result = add(parseInt(data.x), parseInt(data.y));
  response.result = result;
  res.send(response);
});

/**
 * Add function. Returns the sum of x & y.
 * @param {int} x First number
 * @param {int} y Second number
 */
function add(x, y) {
  return x + y;
}

module.exports = router;
