/**
 * @file Create a Node.Js Application with pattyFW to test it
 * @author Patricia de Sousa Paula <patricia@virtual.ufc.br>
 * @author Wellington Wagner Ferreira Sarmento <wwagner@virtual.ufc.br>
 * @version 0.5.0
 * @license Apache-2.0
 */


let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),

  //para app teste
  $ = require('jquery'),

  Alma = require('../class/alma'),
  Laves = require('../class/laves'),
  Smil = require('../class/smil'),
  {Logging} = require('../class/util'); 

  let log = new Logging(__dirname,'log','access.log'); //Create a log file in directory log.

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
app.use(log.createLog('{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[clf]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"}'));
// console.log("Estou aqui antes da leitura do arquivo");
// let result=log.readLog().then((result,reject)=>{
//   if(reject.error) {
//     return reject.errorMsg;
//   } else {
//     return result ;
//   }
// });
// console.log(result);
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
