const { INTERVAL_CLEAN_FILE_MS, INTERVAL_CLEAN_FILE_MS_DEV, FILE_AGE_TO_DELETE, FILE_AGE_TO_DELETE_DEV } = require("../constant");
const path = require("path");
const fs = require("fs");
class FileCleaner
{
    constructor()
    {

    }   

    Start()
    {
        // setInterval(() => {
        //     this.Clean();
        // }, INTERVAL_CLEAN_FILE_MS_DEV);
    }
    
    Clean()
    {
        console.log("CleanCalled");
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

    IsSafeToDelete(strFileName)
    {
        const strDateWithExt = strFileName.split("_")[1];
        const strDate = strDateWithExt.split(".")[0];

        const fileMs = parseInt(strDate);
        const nowMs = parseInt(Date.now());
        const diff = (nowMs-fileMs)/(60*1000);
        console.log(diff, FILE_AGE_TO_DELETE_DEV)
        if(diff > FILE_AGE_TO_DELETE_DEV)
            return true;
        return false;
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
}


module.exports = FileCleaner;