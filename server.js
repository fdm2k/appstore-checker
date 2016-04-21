var express = require('express');
var app = express();

// Load the iTunes / Play app store query modules
var appStoreValidator = require('app-store-validator');

var iTunesFacebook = '284882215';
var appToFind = '';

// appStoreValidator.iTunes.get(iTunesFacebook, function(error, result) {
//    if(error) {
//       console.error(error);
//    }
//    else {
//        console.dir(result);
//    }
//});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('I can't believe it's running on port 3000!');

});
