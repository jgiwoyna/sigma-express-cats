var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// use body parser on EVERY request
app.use(bodyParser.urlencoded({ extended: true }));

// Cat data
var cats = [
  {
    catName: 'Luna',
    temperment: 'Devilish'
  }
];

// Routes
app.get('/cats', function(req, res) {
  res.send(cats);
});

app.post('/cats', function(req, res) {
  console.log('adding a new cat');
  // console.log('req dot body', req.body);
  cats.push(req.body);
  res.sendStatus(201);
});

// Static Files
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public/', file));
});

// Set port to listen on
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server is listening on port ' + app.get('port'));
});
