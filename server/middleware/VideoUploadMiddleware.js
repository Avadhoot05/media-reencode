const multer =  require("multer");
const MEDIA_NAME_PREFIX = require("../constant.js").MEDIA_NAME_PREFIX;
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) 
    {
    	cb(null, './public/uploaded')
    },

    filename: function (req, file, cb) 
  	{
		const newUploadedFileName = MEDIA_NAME_PREFIX + "_" + Date.now();
      	req.body.newUploadedFileName = newUploadedFileName;

    	const newUploadedFileNameWithExt = newUploadedFileName + path.extname(file.originalname);
		req.body.newUploadedFileName = newUploadedFileName;
		req.body.uploadedFileFormat = path.extname(file.originalname);
    	cb(null, newUploadedFileNameWithExt);
  	}
});

const upload = multer({ 
    storage: storage, 

    fileFilter: function(req, file, cb) 
    {
        const ext = path.extname(file.originalname);
        if(ext != ".mkv" && ext != ".mp4")
        {
            console.log(ext);
            return cb(new Error("Only videos allowed"));
        }

        cb(null, true);
    }  
})

module.exports = upload;

