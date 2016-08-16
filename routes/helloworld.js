var express = require('express');
var fs = require("fs");
var router = express.Router();
var multer = require('multer');

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


var uploadFile = multer({ dest: './public/'}).single('file')

/*
 * POST request to upload a file
 */
router.post('/upload', function(req, res) {

  try 
  {
    uploadFile(req, res, function (err) {
      if (err) 
      {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"response": "Error while uploading file - Check if your field name is 'file' "}));
      }
      else
      {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"response": "All is well"}));
      }
    });
  }
  catch (err)
  {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"response": "All is well"}));
  }
});

module.exports = router;