var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var temphtml = fs.readFileSync('index.html');

var responsehtml = buf.toString();


app.get('/', function(request, response) {

response.send(responsehtml);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
