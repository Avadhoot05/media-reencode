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

module.exports = {
    routes, 
    MEDIA_NAME_PREFIX, 
    mapFn, ACTION
};