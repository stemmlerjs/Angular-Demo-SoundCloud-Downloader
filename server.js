var express = require('express');
var path = require('path');
var app = express();

app.listen(3000);
console.log("Server listening on port 3000");

// Make everything inside of public folder available to client
app.use(express.static(__dirname + "/public"))

// Catchall route (used in combination with Angular's .otherwise('/') config)
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});