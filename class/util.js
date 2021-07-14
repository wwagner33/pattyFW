/**
 * @file Alma class
 * @author Patricia de Sousa Paula <patricia@virtual.ufc.br>
 * @author Wellington Wagner Ferreira Sarmento <wwagner@virtual.ufc.br>
 * @version 0.5.0
 * @license Apache-2.0
 */

'use strict';

const morgan = require('morgan');
const fs = require('fs');
const path = require('path');



class Logging{
    constructor(localDir='./',logDir='log',logFile='access.log'){
        let logPathPartial = path.join(localDir,logDir);
        try{
            if(!fs.existsSync(logPathPartial)){ //Test and 
                
                fs.mkdirSync(logPathPartial);
                console.log('Directory created.');
            } else {
                console.log('Directory already exists.');
            }
        } catch(err) {
            console.error(err);
        }   
        this.logPath = path.join(logPathPartial, logFile);
        this.writeLogStream = fs.createWriteStream(this.logPath, {flags: 'a+',encoding: 'utf8'}); //Append file if exist or create if not

    }
    createLog(logFields='{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[clf]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"}'){
        return morgan(logFields,{stream: this.writeLogStream});
    }
    clearLog(){

    }
}

module.exports = {Logging};

