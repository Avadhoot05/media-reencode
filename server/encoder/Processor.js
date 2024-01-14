const Encoder = require("./Encoder.js");
const S3Service = require("../BucketService/S3Service.js");
const BucketManager = require("../controller/BucketManager.js");
const FileCleaner = require("../Utils/FileCleaner.js");
const path = require('path');

class Job
{
    constructor(fileName, originalFormat, connection, action, actionParam)
    {
        this.fileName = fileName;
        this.originalFormat = originalFormat;
        this.connection = connection;
        this.action = action;
        this.actionParam = actionParam;
    }

    GetFileName()
    {
        return this.fileName;
    }

    GetFileNameWithOriginalFormat()
    {
        return this.fileName + this.originalFormat;
    }

    GetConnection()
    {
        return this.connection;
    }

    GetAction()
    {
        return this.action;
    }

    GetActionParam()
    {
        return this.actionParam;
    }


}

class Processor
{
    constructor()
    {
        /** @type {Array<Job>}*/
        this.queue = [];
        this.bProcessing = false;
        this.encoder = null;
        this.bucketManager = null;
        /**@type {FileCleaner}*/
        this.fileCleaner = null;
        this.Init();
    }


    SetFileCleaner(fileCleaner)
    {
        this.fileCleaner = fileCleaner;
    }

    /**
     * @returns {void} 
     */
    Init()
    {
        this.encoder = new Encoder();
        this.bucketManager = new BucketManager(new S3Service());
    }

    /**
     * @param {Job} job 
     */
    AddToQueue(job)
    {
        this.queue.push(job);
    }


    ProcessJobs()
    {
        if(this.bProcessing)
        {
            console.log("Processing other media");
            return false;
        }
        
        if(this.queue.length == 0) {
            this.bProcessing = false;
            return false;
        }
        
        let job = this.queue[0];
        this.queue.splice(0, 1);
        this.bProcessing = true;
        let connection = job.GetConnection();

        const onError = () => {
            const resp = {
                "type": "reencodeResponse",
                "bSuccess": false,
            }  

            //send packet via conn
            connection.send(JSON.stringify(resp));
            this.ProcessJobs();
        }


        this.encoder.Encode(job, (res, err) => {
            this.bProcessing = false;

            if(err)
                onError();
            else
            {
                this.bucketManager.Upload(res["strOutputFilePath"], res["strFileNameWithFormat"], (uploadRes, uploadErr)=>{
                    if(uploadErr)
                        onError();
                    else
                    {
                        //delete local reencoded file
                        let strReencodedFilePath = path.join('./public', 'reencoded', res["strFileNameWithFormat"]);        
                        this.fileCleaner.DeleteFile(strReencodedFilePath);

                        this.bucketManager.Get("reencoded/"+res["strFileNameWithFormat"], (getRes, getErr)=>{
                            if(getErr)
                                onError();
                            else
                            {
                                const resp = {
                                    "type": "reencodeResponse", 
                                    "bSuccess": true,
                                    "strOutputFilePath": getRes["strOutputFilePath"],//aws signed url
                                };

                                connection.send(JSON.stringify(resp));
                                this.ProcessJobs();
                            }
                        });
                    }
                })
            }

            let fileNameWithOriginalFormat = job.GetFileNameWithOriginalFormat();
            let strUploadedFilePath = path.join('./public', 'uploaded', fileNameWithOriginalFormat);        
            this.fileCleaner.DeleteFile(strUploadedFilePath);
        }, 
        
        (percent) => {
            const resp = {
                "type": "reencodeProgress", 
                "percent": percent,
            };

            connection.send(JSON.stringify(resp));
        });



    }
}

module.exports = {
    Job, Processor
};