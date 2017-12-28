var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Activity = require('./api/models/activityModel'),
  Laboratory = require('./api/models/laboratoryModel'),
  UserContext = require('./api/models/userContextModel'),
  UserInteraction = require('./api/models/userInteractionModel'),
  User = require('./api/models/userModel'),
  WidgetContext = require('./api/models/widgetContextModel'),
  bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ulabpa_local');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/allRoutes'); //rotas
routes(app); //registrando rotas

// *** parei aqui
var config = require('./config'); //arquivo de config


app.listen(port);

console.log('Started on: ' + port);
