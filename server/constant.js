const routes = {
    "VIDEO_UPLOAD": "/upload"
}

const MEDIA_NAME_PREFIX = "media"; //change it to project name


const mapFn = (x, in_min, in_max, out_min, out_max) => {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const ACTION = Object.freeze({
    NONE: 0, 
    FPS: 1,
    RESOLUTION: 2, 
    FORMAT: 3, 
    COMPRESS: 4
});

const INTERVAL_CLEAN_FILE_MS = 24*60*60*1000;//24hrs
const INTERVAL_CLEAN_FILE_MS_DEV = 15*1000;//15Sec

const FILE_AGE_TO_DELETE = 60;//30min
const FILE_AGE_TO_DELETE_DEV = 1;//1min

const DOWNLOAD_LINK_EXPIRY = 15*60; 




module.exports = {
    routes, 
    MEDIA_NAME_PREFIX, 
    mapFn, ACTION, INTERVAL_CLEAN_FILE_MS, INTERVAL_CLEAN_FILE_MS_DEV,
    FILE_AGE_TO_DELETE, FILE_AGE_TO_DELETE_DEV, DOWNLOAD_LINK_EXPIRY
};

