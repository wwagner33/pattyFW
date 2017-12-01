var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Activity = require('./api/models/activityModel'), //created model loading here
  Laboratory = require('./api/models/laboratoryModel'),
  UserContext = require('./api/models/userContextModel'),
  UserInteraction = require('./api/models/userInteractionModel'),
  User = require('./api/models/userModel'),
  WidgetContext = require('./api/models/widgetContextModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/allRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
