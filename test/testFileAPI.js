const express = require("express");
const cors = require("cors"); //Cross-origin Resource Sharing Module
const app = express();

global.__basedir = __dirname;


var corsConfig = {
  origin: "http://localhost:8888"
};

app.use(cors(corsConfig));

const evokeRoutes = require("../class/file_middleware/upload.route");


app.use(express.urlencoded({ 
  extended: true 
}));


evokeRoutes(app);

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Handle error
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Error occured'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});