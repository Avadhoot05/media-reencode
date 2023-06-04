
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg");
const mapFn  = require("../constant.js").mapFn;
const ACTION = require("../constant.js").ACTION;
const  Job  = require("./Processor.js").Job;
const path = require("path");



class Encoder
{
    constructor()
    {
        ffmpeg.setFfmpegPath(ffmpegPath.path);
    }


    /**
     * 
     * @param {Job} job 
     * @param {*} onComplete 
     */
    Encode(job, onComplete, onProgress)
    {
        let action = job.GetAction();
        console.log("switch", action);
        switch(action)
        {
            case ACTION.FPS:
                this.EncodeFPS(job, onComplete, onProgress);
                break;
            case ACTION.RESOLUTION:
                this.EncodeResolution(job, onComplete, onProgress);
                break;
            case ACTION.FORMAT:
                this.EncodeFormat(job, onComplete, onProgress);
                break;
            case ACTION.COMPRESS:
                this.Compress(job, onComplete, onProgress);
                break;
        }
    }

    /**
     * 
     * @param {Job} job 
     * @param {*} onComplete 
     */
    EncodeFPS(job, onComplete, onProgress)
    {
        let fileNameWithOriginalFormat = job.GetFileNameWithOriginalFormat();
        let actionParam =  job.GetActionParam();
        let fps = actionParam["FPS"];
        console.log("[FPS] value ", fps);
        
        let strFilePathToProcess = path.join('./tmp', 'uploaded', fileNameWithOriginalFormat);        
        console.log("[FPS] uploaded file ", strFilePathToProcess);

        let strOutputFilePath = path.join('./tmp', 'reencoded', fileNameWithOriginalFormat);
        console.log("[FPS] output file ", strOutputFilePath);
        
        ffmpeg(strFilePathToProcess)
        .output(strOutputFilePath)
        .videoCodec("libx264")
        .fps(fps)
        .on("error", function(err){
            onComplete(null, err);
        })
        .on("progress", function(progress){
            onProgress(progress.percent);
        })
        .on("end", function(){
            onComplete({
                "strOutputFilePath": strOutputFilePath
            }, null);
        })
        .run();
    }

    /**
     * 
     * @param {Job} job 
     * @param {Function} onComplete 
     * @param {Function} onProgress 
     */
    EncodeResolution(job, onComplete, onProgress)
    {
        let fileNameWithOriginalFormat = job.GetFileNameWithOriginalFormat();
        let actionParam =  job.GetActionParam();
        let res = actionParam["RESOLUTION"];
        console.log("[RESOLUTION] value ", res);
        
        let strFilePathToProcess = path.join('./tmp', 'uploaded', fileNameWithOriginalFormat);        
        console.log("[RESOLUTION] uploaded file ", strFilePathToProcess);

        let strOutputFilePath = path.join('./tmp', 'reencoded', fileNameWithOriginalFormat);
        console.log("[FPS] output file ", strOutputFilePath);

        ffmpeg(strFilePathToProcess)
        .output(strOutputFilePath)
        .videoCodec("libx264")
        .size(`${res.width}x${res.height}`)
        .on("error", function(err){
            onComplete(null, err);
        })
        .on("progress", function(progress){
            onProgress(progress.percent);
        })
        .on("end", function(){
            onComplete({
                "strOutputFilePath": strOutputFilePath
            }, null);
        })
        .run();
    }

    /**
     * 
     * @param {Job} job 
     * @param {*} onComplete 
     * @param {*} onProgress 
     */
    EncodeFormat(job, onComplete, onProgress)
    {
        let actionParam =  job.GetActionParam();
        let newFormat = actionParam["FORMAT"];
        console.log("[Format] value ", newFormat);

        let fileNameWithOriginalFormat = job.GetFileNameWithOriginalFormat();
        let fileNameWithNewFormat = job.GetFileName() + "." + newFormat;
        
        let strFilePathToProcess = path.join('./tmp', 'uploaded', fileNameWithOriginalFormat);        
        console.log("[Format] uploaded file ", strFilePathToProcess);

        let strOutputFilePath = path.join('./tmp', 'reencoded', fileNameWithNewFormat);
        console.log("[Format] output file ", strOutputFilePath);

        
        ffmpeg(strFilePathToProcess)
        .output(strOutputFilePath)
        .videoCodec("libx264")
        .on("error", function(err){
            onComplete(null, err);
        })
        .on("progress", function(progress){
            onProgress(progress.percent);
        })
        .on("end", function(){
            onComplete({
                "strOutputFilePath": strOutputFilePath
            }, null);
        })
        .run();
    }

    /**
     * 
     * @param {Job} job 
     * @param {*} onComplete 
     * @param {*} onProgress 
     */
    Compress(job, onComplete, onProgress)
    {
        let actionParam =  job.GetActionParam();
        let uSliderCompressValue = actionParam["COMPRESS_VAL"];
        console.log("[Compress] value ", uSliderCompressValue);

        let crfCommand = "-crf " + Math.ceil(mapFn(uSliderCompressValue, 0, 100, 15, 51));  
        console.log("[Compress] crf commad ", crfCommand);
        let fileNameWithOriginalFormat = job.GetFileNameWithOriginalFormat();
        
        let strFilePathToProcess = path.join('./tmp', 'uploaded', fileNameWithOriginalFormat);        
        console.log("[RESOLUTION] uploaded file ", strFilePathToProcess);

        let strOutputFilePath = path.join('./tmp', 'reencoded', fileNameWithOriginalFormat);
        console.log("[FPS] output file ", strOutputFilePath);

        ffmpeg(strFilePathToProcess)
        .output(strOutputFilePath)
        .videoCodec("libx264")
        .withOutputOption(crfCommand)
        .on("error", function(err){
            onComplete(null, err);
        })
        .on("progress", function(progress){
            onProgress(progress.percent);
        })
        .on("end", function(){
            onComplete({
                "strOutputFilePath": strOutputFilePath
            }, null);
        })
        .run();
    }
}

module.exports = Encoder;