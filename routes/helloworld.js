var express = require('express');
var fs = require("fs");
var router = express.Router();

/*
 * POST helloworld request.
 */
router.post('/sayhello', function(req, res) {
  var obj;
  fs.readFile('./routes/helloworld.json', 'utf8', function (err, data) 
  {
    if (err) throw err;
    
    var jsonContent = JSON.parse(data);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonContent));
  });
});

/*
 * GET helloworld request.
 */
router.get('/sayhello', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"response": "Hello World"}));
});

module.exports = router;