export const routes = {
    "VIDEO_UPLOAD": "/upload"
}

export const MEDIA_NAME_PREFIX = "media"; //change it to project name


export const map = (x, in_min, in_max, out_min, out_max) => {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}