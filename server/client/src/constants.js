export const BACKEND_URI = "http://localhost:3000\\";

export const formDataConfig = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

export const GetFileExt = (strFileName, bWithPeriod) => {
    let splits = strFileName.split(".");
    let ext = splits[splits.length-1];

    return bWithPeriod ? "." + ext : ext;
}

export const ACTION = {

    FPS: 1,
    RESOLUTION: 2,
    FORMAT: 3,
    COMPRESS: 4

}