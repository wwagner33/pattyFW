// r — Open the file in read-only mode. An exception is thrown if the file does not exist.
// r+ — Open the file for reading and writing. If the file does not exist, an exception is thrown.
// w — Open the file in write-only mode. The file is created (only if does not already exist) or truncated (if exists).
// w+ — Open the file for reading and writing, placing the stream at the start of the file. The file is created if doesn't exist.
// a — Open the file for appending, positioning the stream at the end of the file. The file is created if doesn't exist.
// a+ — Open the file for reading and appending, putting the stream at the end of the file. The file is created in case if it does not exist.
//https://www.tabnine.com/code/javascript/functions/fs/WriteStream/write


const fs = require('fs');
const path = require('path');

class FileStream{
    constructor(localDir=__dirname,logDir='fileFolder',logFile='test.txt'){
        let logPathPartial = path.join(localDir,logDir);
        try{
            if(!fs.existsSync(logPathPartial)){ //Test if the folder is created.
                
                fs.mkdirSync(logPathPartial);
                this.logPath = path.join(logPathPartial, logFile);
                console.log('Directory created.');
            } else {
                this.logPath = path.join(logPathPartial, logFile);
                console.log('Directory already exists.');
            }
        } catch(err) {
            console.error(err);
        }   
        
        
        
    }
    existsFile(){
        try{
            if(fs.existsSync(this.logPath)){
                return true;
            }
        }catch(err){
            console.error(err);
            return false;
        }

    }
    writeFile(data,callback){
        let error='';
        this.writeStream = fs.createWriteStream(this.logPath, {flags: 'a+',encoding: 'utf8'}); //Append file if exist or create if not
        this.writeStream.write(data);
        this.writeStream.on('error',(err)=> {
           console.log('Error write file: ',this.logPath);
           console.error(err);
           error=err;
        });
        this.writeStream.end();
        return callback(error,data);
    }
    readFile(){
        this.readLogStream = fs.createReadStream(this.logPath, {flags: 'r+',encoding: 'utf8'});
        return new Promise((result,reject)=>{
            let fileData;
            this.readLogStream.on('data',(data)=>{
                fileData=data;
            });
            this.readLogStream.on('error',(err)=> {
                if(err) {
                    reject({errorMsg:err,error:true});
                } else reject({errorMsg:null,error:false});
            });
            this.readLogStream.on('end',()=> result(fileData));
        });



    }
}

let testFile = new FileStream(__dirname,'filetest','test.log');
testFile.writeFile('\nMais um teste...oi a Patty\n',(err,data)=>{
    if(!err) console.error('Escrevi no arquivo: ',data);
});
console.log(testFile.existsFile());