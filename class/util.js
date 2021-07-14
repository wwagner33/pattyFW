//const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const logDir="log";
try{
    if(!fs.existsSync(logDir)){
        fs.mkdirSync(logDir);
        console.log('Directory is created.');
    } else {
        console.log('Directory already exists.');
    }
} catch(err) {
    console.error(err);
}


let logPath = path.join(__dirname, logDir, 'access.log');
let writeLogStream = fs.createWriteStream(logPath, {flags: 'a+',encoding: 'utf8'}); //Append file if exist or create if not


    writeLogStream.write('Testing...Testing');
    writeLogStream.end();




//module.exports = Logging;
