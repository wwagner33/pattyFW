var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),

  //para app teste
  $ = require('jquery'),

  Alma = require('./class/alma'),
  Laves = require('./class/laves'),
  Smil = require('./class/smil'),

  Activity = require('./models/activityModel'),
  Laboratory = require('./models/laboratoryModel'),
  UserContext = require('./models/userContextModel'),
  UserInteraction = require('./models/userInteractionModel'),
  User = require('./models/userModel'),
  WidgetContext = require('./models/widgetContextModel');

// set the view engine to ejs
app.set('view engine', 'ejs');

// css e imagens
app.use(express.static(__dirname + '/public'));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ulabpa', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./apiRoutes'); //importando rotas da api
routes(app); //registrando rotas

routes = require('./appLabRoutes'); //rotas app web
routes(app);

routes = require('./testRoutes'); //rotas de teste
routes(app);

app.listen(port);

console.log('Alma is alive - port: ' + port);
