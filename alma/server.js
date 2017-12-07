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

// set the view engine to ejs
app.set('view engine', 'ejs');

// css and images
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file
app.get('/', function(req, res) {
    res.render('pages/index'); // index page
});
app.get('/register_activity', function(req, res) {
    res.render('pages/register_activity'); // about page
});

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ulabpa');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/allRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Started on: ' + port);
