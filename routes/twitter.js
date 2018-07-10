var express = require('express');
var request = require('request');
var twitterRouter = express.Router();

twitterRouter.get('/', function(req, res) {
  
  request('https://www.google.com', function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    var errorMsg = 'error:' + error;
    var statusCodeMsg = 'statusCode:' + response && response.statusCode;
    var bodyMsg = 'body:' + body;
    res.send(errorMsg + '|' + statusCodeMsg + "|" + bodyMsg);
    //res.send('statusCode:' + response && response.statusCode); // Print the response status code if a response was received
    //res.send('body:' + body); // Print the HTML for the Google homepage.
  });
})

  module.exports = twitterRouter;

  