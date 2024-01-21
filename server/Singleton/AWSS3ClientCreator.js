const  { S3Client } = require("@aws-sdk/client-s3");
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

let instance = null;
class AWSS3ClientCreator
{
    constructor()
    {
        if(instance)
        {
            throw new Error("I am singleton. Can not be initiated twice");
        }
        instance = this;
        this.client = new S3Client({
            "region": "ap-south-1", 
            "credentials": {
                "accessKeyId": process.env.AWS_CONVERTZILLA_NODE_USER_ACCESS_KEY,
                "secretAccessKey": process.env.AWS_CONVERTZILLA_NODE_USER_SECRET_ACCESS
            }
        });
    }

    GetInstance()
    {
        return this.client;
    }
}

const awsS3ClientCreator = new AWSS3ClientCreator();
module.exports = {
    awsS3ClientCreator
}






