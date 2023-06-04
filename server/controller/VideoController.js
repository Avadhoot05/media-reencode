const VideoUpload =  (req,res) => {

    let { newUploadedFileName, uploadedFileFormat } = req.body;
    
    try {  
		res.json({ newUploadedFileName: newUploadedFileName, uploadedFileFormat: uploadedFileFormat });
    } 
	catch (error) {
    	console.log(error);
      	res.status(400).json(error);
    }
}

module.exports = VideoUpload;