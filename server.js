var express = require('express');
var path = require('path');
var app = express();

app.listen(3000);
console.log("Server listening on port 3000");

app.use(express.static(__dirname + "/public"))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));

});