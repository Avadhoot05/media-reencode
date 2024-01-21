const { INTERVAL_CLEAN_FILE_MS, INTERVAL_CLEAN_FILE_MS_DEV, FILE_AGE_TO_DELETE, FILE_AGE_TO_DELETE_DEV } = require("../constant");
const path = require("path");
const fs = require("fs");
const  { ListObjectsV2Command, DeleteObjectsCommand } = require("@aws-sdk/client-s3");
const { awsS3ClientCreator } = require("../Singleton/AWSS3ClientCreator");

class FileCleaner
{
    constructor()
    {
        this.timer = -1;
    }   

    Start()
    {
        if(this.timer == -1)
            setTimeout(this.CleanS3.bind(this), INTERVAL_CLEAN_FILE_MS);
    }

    KillTimer()
    {
        clearTimeout(this.timer);
        this.timer = -1;
    }

    /**
     * @param {string} strFileName media_date.now().ext 
     * @returns 
     */
    IsSafeToDelete(strFileName)
    {
        const strDateWithExt = strFileName.split("_")[1];
        const strDate = strDateWithExt.split(".")[0];

        const fileMs = parseInt(strDate);
        const nowMs = parseInt(Date.now());
        const diff = (nowMs-fileMs)/(60*1000);
        if(diff > FILE_AGE_TO_DELETE)
            return true;
        return false;
    }
    
    Clean()
    {
        let strUploadedFolderPath = path.join('./public', 'uploaded');        

        fs.readdir(strUploadedFolderPath, (err, files) => {
            if(err)
            {
                console.log("Error while cleaning folder path: strUploaded", err);
                return;
            }

            files.forEach(file => {
                console.log(file);
                if(this.IsSafeToDelete(file))
                    this.DeleteFile(path.join(strUploadedFolderPath ,file));
            });
          });
    }

    async CleanS3()
    {
        const command = new ListObjectsV2Command({
            Bucket: process.env.S3BUCKET
          });
        
          try {
            let bTruncated = true;
        
            const arrKeys = [];
            const arrKeysToDelete = [];
            
            let bHasAnyFiles = true;
        
            while (bTruncated) 
            {
                const { Contents, IsTruncated, NextContinuationToken } = await awsS3ClientCreator.GetInstance().send(command);
                
                if(Contents)
                {
                    for(let vid of Contents)
                    {
                        arrKeys.push(vid.Key);
                        const strFileName = vid.Key.split("/")[1];
                        if(this.IsSafeToDelete(strFileName))
                            arrKeysToDelete.push(vid.Key);
                    }    
                }
                
                
                bTruncated = IsTruncated;
                command.input.ContinuationToken = NextContinuationToken;
            }
            if(arrKeysToDelete.length != 0)
            {
                this.DeleteMultipleOnS3(arrKeysToDelete);
            }

            if(arrKeys.length == arrKeysToDelete.length) //if all files are deleted
            {
                console.log("Stopped interval");
                this.KillTimer();
            }
            else
            {
                this.KillTimer();
                this.Start();
                
            }
        } 
        catch (err) {
            console.error(err);
        }
    }

    DeleteFile(strPath)
    {
        console.log("deleting", strPath);
        fs.unlink(strPath, (err) => {
            if (err) {
              console.log('Error while Deleting', strPath, err);
            } else {
              console.log('Deleted', strPath);
            }
          });
    }

    async DeleteMultipleOnS3(arrKeysToDelete)
    {
        const arrObjectToDelete = arrKeysToDelete.map(objKey => {
            return {Key: objKey}
        });
        console.log("Deleting keys on S3", arrObjectToDelete);

        const command = new DeleteObjectsCommand({
            Bucket: process.env.S3BUCKET,
            Delete: {
              Objects: arrObjectToDelete,
            },
        });
        
        try {
            const { Deleted } = await awsS3ClientCreator.GetInstance().send(command);
            console.log(`Deleted objects:`,);
            console.log(Deleted.map((d) => ` • ${d.Key}`).join("\n"));
        } 
        catch (err) {
            console.error(err);
        }
    }

    DeleteS3File(strKey)
    {

    }
}


module.exports = FileCleaner;