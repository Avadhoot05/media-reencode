class BucketManager
{
    //dependancy injection (service can be s3, gcp, azure, local disk)
    constructor(service)
    {
        this.bucketService = service;
    }

    Upload(path)
    {
        this.bucketService.Upload(path);
    }
}

module.exports = BucketManager;