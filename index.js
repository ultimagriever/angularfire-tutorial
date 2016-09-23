var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

var server = app.listen(8081, function() {
  var port = server.address().port;
  console.log("App running on port %d in %s mode", port, app.settings.env);
});

