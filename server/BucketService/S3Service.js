const {S3Client, GetObjectCommand} = require("@aws-sdk/client-s3");
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner");
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

    Upload(path)
    {

    }

    GetObjectUrl(key)
    {
        const cmd = new GetObjectCommand({
            Bucket: process.env.S3BUCKET, 
            Key: key
        });

        getSignedUrl(this.s3Client, cmd)
        .then(url => {
            console.log("URL", url);
        })
        .catch(e => {
            console.log("error", e);
        })



    }
}

module.exports = S3Service;