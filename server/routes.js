const express = require("express");
const { routes } = require("./constant.js");
const VideoUpload = require("./controller/VideoController.js");
const upload = require("./middleware/VideoUploadMiddleware.js");


const router = express.Router();
router.post(routes.VIDEO_UPLOAD, upload.fields([
    {
      name: "video",
      maxCount: 5,
    },
  ]), 
  VideoUpload);



  module.exports =  router;

