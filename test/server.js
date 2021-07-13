/**
 * @file Create a Node.Js Application with pattyFW to test its
 * @author Patricia de Sousa Paula <patricia@virtual.ufc.br>
 * @author Wellington Wagner Ferreira Sarmento <wwagner33@gmail.com>
 * @version 0.1
 * @license Apache2
 */


let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),

  //para app teste
  $ = require('jquery'),

  Alma = require('./class/alma'),
  Laves = require('./class/laves'),
  Smil = require('./class/smil');
  
  /* Creio que esta parte não seja necessária pois a parte de dados já está dentro da classe Alma.
  Activity = require('./models/activityModel'),
  Laboratory = require('./models/laboratoryModel'),
  UserContext = require('./models/userContextModel'),
  UserInteraction = require('./models/userInteractionModel'),
  User = require('./models/userModel'),
  WidgetContext = require('./models/widgetContextModel');
*/
// set the view engine to ejs
app.set('view engine', 'ejs');

// css e imagens
app.use(express.static(__dirname + '/public'));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const newLocal = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect('mongodb://localhost/pattyfw', newLocal);

//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ***** a pasta log e o arquivo access.log não estão sendo criados automaticamente.
let morgan = require('morgan');
let fs = require('fs');
let path = require('path');
let logPath = path.join(__dirname, 'log', 'access.log');
let accessLogStream = fs.createWriteStream(logPath, {flags: 'a'});
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

let routes = require('./apiRoutes'); //importando rotas da api
routes(app); //registrando rotas

routes = require('./appLabRoutes'); //rotas app web
routes(app);

routes = require('./testRoutes'); //rotas de teste
routes(app);

app.listen(port);

console.log('Alma is alive - port: ' + port);
