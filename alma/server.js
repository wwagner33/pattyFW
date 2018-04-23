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

var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var logPath = path.join(__dirname, 'log', 'acesso.log');
var accessLogStream = fs.createWriteStream(logPath, {flags: 'a'});
//app.use(morgan('combined', {stream: accessLogStream}));
app.use(morgan('{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[clf]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"}', {stream: accessLogStream}));
//ver depois: log file rotation com morgan
/*morgan('combined', {
    stream: require('file-stream-rotator').getStream({
      filename: path.join(__dirname, 'log', 'access_%DATE%.log'),
      frequency: 'daily',
      verbose: false,
      date_format: 'YYYYMMDD'
    })
})*/

var routes = require('./apiRoutes'); //importando rotas da api
routes(app); //registrando rotas

routes = require('./appLabRoutes'); //rotas app web
routes(app);

routes = require('./testRoutes'); //rotas de teste
routes(app);

app.listen(port);

console.log('Alma is alive - port: ' + port);
