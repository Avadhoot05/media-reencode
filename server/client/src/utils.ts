export const BytesToMB = (bytes: number) : number => {
    return bytes/(1024*1024);
}

export const IsValidFile = (file : File) : boolean => {
    if(file && file.type.indexOf("video") == 0)
        return true;        
    return false;
}