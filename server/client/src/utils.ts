export const BytesToMB = (bytes: number) : number => {
    return bytes/(1024*1024);
}

export const IsValidFile = (file : File) : boolean => {
    if(file && file.type.indexOf("video") == 0)
        return true;        
    return false;
}

const prod = "http://ec2-54-90-108-68.compute-1.amazonaws.com/3000";
const dev = "http://localhost:3000";
export const baseUrl = (window.location.hostname.split(":")[0] === "localhost" || window.location.hostname.includes("192")) ? dev : prod; 