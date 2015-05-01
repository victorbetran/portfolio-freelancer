var express = require('express');
var compression = require('compression')
var path = require("path");

var app = express();

app.use(compression())
app.use('/public', express.static('public'));


app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})