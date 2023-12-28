import React, { useEffect, useState, ChangeEvent } from 'react'
import FileUpload from '../FileUpload'
import usePost from '../Hooks/usePost';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Box} from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select,FormHelperText  } from '@mui/material';


import { ACTION, GetFileExt, formDataConfig } from '../../constants';
import Result from '../Result';
import PageHeading from '../PageHeading';
import { baseUrl } from 'src/utils';

interface IWsMessage {
    data : string
}

//3gp-0, mp4-1, mov-1, flv-1, mkv-1, avi, webm-0, 
function Format({wsClient}) {
    const arrFormat : Array<object> = [/*{1: '3gp'}*/ , {2: 'mp4'}, {3: 'mov'}, {4: 'flv'},{5: 'mkv'},{6: 'avi'}, /*{7: 'webm'}*/];

    const [selectedFormat, setSelectedFormat] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [strErrorText, setErrorText] = useState<string>('');
    
    const [completionPercent, setCompletionPercent] = useState<number>(0);
    const [response, error, loading, makeRequest] = usePost({url:`${baseUrl}/upload`, config: formDataConfig} );

    //include uploading + reencoding
    const [bProcessing, setProcessing] = useState<boolean>(false);
    const [strVideoPath, setVideoPath] = useState<string>("");

    useEffect(() => {

        if(response)
        {
            const action : number = ACTION.FORMAT;
	        const actionParam : {"FORMAT" : string}= {"FORMAT": selectedFormat};

            wsClient.send(JSON.stringify({
				type: "enque",
				newUploadedFileName: response.data.newUploadedFileName, 
				uploadedFileFormat: response.data.uploadedFileFormat,
				action: action,
				actionParam: actionParam
			}));
        }
        else if(error)
        {

        }
    },  
    [response, error, loading]);

    wsClient.onmessage = (message : IWsMessage) : void  => {
        const dataFromServer = JSON.parse(message.data);
        console.log('WS message! ', dataFromServer);

        if (dataFromServer["type"] === "reencodeResponse") 
        {
            setProcessing(false);
            if(dataFromServer["bSuccess"])
            {
                console.log("Reencoded path >> ",dataFromServer["strOutputFilePath"]);
                setVideoPath(dataFromServer["strOutputFilePath"]);
            }
            else
            {
                setVideoPath("");
            }
        }

        else if(dataFromServer["type"] === "reencodeProgress")
        {
            const percent : number = isNaN(dataFromServer["percent"]) ? 0 : parseInt(dataFromServer["percent"]);
            setCompletionPercent(percent);
        }
    };

    /**
     * when user changes the video format 
     */
    const handleFormatChange = (e : ChangeEvent<HTMLInputElement>) : void => {
        setErrorText("");
        setSelectedFormat(e.target.value);

        if(selectedFile && e.target.value.toLowerCase() == GetFileExt(selectedFile.name, false).toLowerCase())
            setErrorText("file is already in selected file format");
    };

    /**
     * when File change
     */
    const HandleFileChange = (e : ChangeEvent<HTMLInputElement>) : void => {
        
        setErrorText("");
        setSelectedFile(e.target.files[0]);

        console.log(selectedFormat.toLowerCase(), GetFileExt(e.target.files[0].name, false).toLowerCase());
        if(selectedFormat.toLowerCase() == GetFileExt(e.target.files[0].name, false).toLowerCase())
            setErrorText("file is already in selected file format");
    }

    const HandleFormSubmit = e => {
        console.log(selectedFormat);
        e.preventDefault();
        setVideoPath("");
        setCompletionPercent(0);
        setProcessing(true);
       
        let formData : FormData = new FormData();
        formData.append("video", selectedFile);
        formData.append("format", GetFileExt(selectedFile.name, true));
        makeRequest(formData);
    }

    /**
     * get dropdown list items
     */
    const GetMenuItems = () : Array<any> => {

        return arrFormat.map(format => {
            const k : string = Object.keys(format)[0];
            const val : string  = format[k];
            return <MenuItem key={k} value={val}>{val.toUpperCase()}</MenuItem>
        });
    }

  return (
    <>
        {
            (bProcessing || strVideoPath.length !== 0) ? (
                <Result
                    percent = {completionPercent}
                    strVideoPath = {strVideoPath}
                    action={ACTION.FORMAT}
                />  
            ) : (
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                >
                    <PageHeading
                        heading="Video Format Conversion"
                        description= "Reencode video files by modifying the file format."
                    />
                    <form onSubmit={HandleFormSubmit}>
                        <Box 
                            display="flex" 
                            flexDirection="column" 
                            alignItems="center"
                        >
                            <FileUpload 
                                onChangeHandler={HandleFileChange}
                            />

                            <FormControl 
                                error={!!strErrorText} 
                                style={{ width: '100%', margin: "15px 0" }}
                            >
                                <InputLabel id="format-label">Select Format</InputLabel>
                                <Select
                                    data-testid="format-select"
                                    labelId="format-label"
                                    value={selectedFormat}
                                    onChange={handleFormatChange}
                                >
                                {
                                    GetMenuItems()
                                }
                                </Select>
                                { strErrorText !== "" && <FormHelperText>{strErrorText}</FormHelperText> }
                            </FormControl>
        
                            <Button 
                                data-testid="uploadbtn"
                                type="submit" 
                                variant="contained" 
                                color="primary"
                                disabled={strErrorText !== "" || selectedFile === null || selectedFormat === ""}
                            >
                                upload
                            </Button>
                        </Box>
                    </form>
                    
                </Box>
            )
        }
      </>  
  )
}

export default Format