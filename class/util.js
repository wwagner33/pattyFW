const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
//const logDir="log";


class Logging{
    constructor(logDir="log"){
        try{
            if(!fs.existsSync(logDir)){ //Test and 
                fs.mkdirSync(logDir);
                console.log('Directory created.');
            } else {
                console.log('Directory already exists.');
            }
        } catch(err) {
            console.error(err);
        }   
        this.logPath = path.join(__dirname, logDir, 'access.log');
        this.writeLogStream = fs.createWriteStream(logPath, {flags: 'a+',encoding: 'utf8'}); //Append file if exist or create if not

    }
    createLog(){
        return morgan('{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[clf]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"}', {stream: writeLogStream});
    }
    clearLog(){

    }
}


//module.exports = Logging;
