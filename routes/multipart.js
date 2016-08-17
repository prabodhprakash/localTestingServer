var express = require('express');
var fs = require("fs");
var router = express.Router();
var multer = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
});

var uploadFile = multer({ storage: storage }).single('file');

/*
 * POST request to upload a file
 */
router.post('/singlefileupload', function(req, res) {

  var isParsingSuccessful = 1;
  res.setHeader('Content-Type', 'application/json');
      try 
      {
        uploadFile(req, res, function (err) {
          console.log(req.file);
          if (req.file == undefined)
          {
            err = "Please upload a file with key as 'file'";
          }

          if (err) 
          {
            res.end(JSON.stringify({"response": err}));
          }
          else
          {
            res.end(JSON.stringify({"response": "File uploaded successfully"}));
          }
        });
      }
      catch (err)
      {
        res.end(JSON.stringify({"response": err}));
      }

});

/*
 * GET request to upload a file
 */
router.get('/downloadfile', function(req, res) 
{
  res.download('./public/stylesheets/style.css', 'style.css');
});


module.exports = router;