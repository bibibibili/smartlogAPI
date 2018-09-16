var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
var userModel = require('./models/user');
var logModel = require('./models/log');
var connection = require('./utils/db');
var routes = require('./routes/routes');

routes.configure(app);
var server = app.listen(3000, function () {
    console.log('Server listening on port ' + server.address().port);
});
