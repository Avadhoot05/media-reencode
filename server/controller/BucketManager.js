const S3Service = require("../BucketService/S3Service");

class BucketManager
{
    //dependancy injection (service can be s3, gcp, azure, local disk)
    constructor(service)
    {
        /**@type {S3Service}*/
        this.bucketService = service;
    }

    Upload(strFilePathToUpload, strFileName, OnComplete)
    {
        this.bucketService.UploadObject(strFilePathToUpload, strFileName, OnComplete);
    }

    Get(strFilePath, onComplete)
    {
        this.bucketService.Get(strFilePath, onComplete);
    }
}

module.exports = BucketManager;