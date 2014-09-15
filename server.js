var app = require('./app');


// Let's start the server.
require('http').createServer(app).listen(app.get('port'), function () {
  console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
});
