export const BytesToMB = (bytes: number) : number => {
    return bytes/(1024*1024);
}

export const IsValidFile = (file : File) : boolean => {
    if(file && file.type.indexOf("video") == 0)
        return true;        
    return false;
}

const PORT = 3000
const WS_SERVER_PORT = 8000

const prod = "http://ec2-54-90-108-68.compute-1.amazonaws.com:";
const dev = "http://localhost:";

export const baseUrl = (window.location.hostname.split(":")[0] === "localhost" || window.location.hostname.includes("192")) ? dev + PORT : prod + PORT; 

const wsProd = "ws://ec2-54-90-108-68.compute-1.amazonaws.com:";
const wsDev = "ws://localhost:";

export const wsUrl = (window.location.hostname.split(":")[0] === "localhost" || window.location.hostname.includes("192")) ? wsDev + WS_SERVER_PORT : wsProd + WS_SERVER_PORT; 
