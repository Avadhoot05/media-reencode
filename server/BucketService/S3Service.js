const {S3Client, GetObjectCommand, PutObjectCommand} = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner");
const fs = require("fs");
const path = require('path');
const { DOWNLOAD_LINK_EXPIRY } = require("../constant");

class S3Service
{
    constructor()
    {
        this.s3Client = new S3Client({
            "region": "ap-south-1", 
            "credentials": {
                "accessKeyId": process.env.AWS_CONVERTZILLA_NODE_USER_ACCESS_KEY,
                "secretAccessKey": process.env.AWS_CONVERTZILLA_NODE_USER_SECRET_ACCESS
            }
        })
    }

    
    /**
     * reads file stream from strFilePathToUpload and upload on reencoded folder in s3
     * @param {string} strFilePathToUpload 
     * @param {string} strFileName 
     * @param {Function} OnComplete 
     */
    UploadObject(strFilePathToUpload, strFileName, OnComplete)
    {
        console.log("reading reencoded file", );
        const self = this;

        fs.readFile(strFilePathToUpload, function(err, data){
            if(err) {
                OnComplete(null, true);
                return;
            }            
            new Upload({
                client: self.s3Client,
                params: {
                    Bucket: process.env.S3BUCKET,
                    Key: "reencoded/"+strFileName,
                    Body: data, 
                    ContentType: "video/*"
                },
                queueSize: 4, // optional concurrency configuration
                partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
            })
            .done()
            .then(res => {
                OnComplete(res, null);
            }).catch((err) => {
                console.log("failed to upload to s3", err);
                OnComplete(null, err);
            })
        });
    }

    /**
     * gets aws signed url for strFilePathOnS3
     * @param {string} strFilePathOnS3 
     * @param {Function} onComplete 
     */
    Get(strFilePathOnS3, onComplete)
    {
        const cmd = new GetObjectCommand({
            Bucket: process.env.S3BUCKET, 
            Key: strFilePathOnS3
        });

        getSignedUrl(this.s3Client, cmd, { expiresIn: DOWNLOAD_LINK_EXPIRY })
        .then(url => {
            onComplete({"strOutputFilePath": url}, null);
        })
        .catch(err => {
            console.log("Error while getting url", strFilePathOnS3, err);
            onComplete(null, err);
        })
    }
}

module.exports = S3Service;