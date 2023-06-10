import React, { useEffect, useState } from 'react'
import FileUpload from '../FileUpload'
import usePost from '../Hooks/usePost';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Box} from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select,FormHelperText  } from '@mui/material';


import { ACTION, GetFileExt, formDataConfig } from '../../constants';
import Result from '../Result';
import PageHeading from '../PageHeading';
import BackButton from '../BackButton';

//3gp-0, mp4-1, mov-1, flv-1, mkv-1, avi, webm-0, 
function Format({wsClient}) {
    console.log("format")
    const arrFormat = [/*{1: '3gp'}*/ , {2: 'mp4'}, {3: 'mov'}, {4: 'flv'},{5: 'mkv'},{6: 'avi'}, /*{7: 'webm'}*/];

    const [selectedFormat, setSelectedFormat] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [strErrorText, setErrorText] = useState('');
    
    const [completionPercent, setCompletionPercent] = useState(0);
    const [response, error, loading, makeRequest] = usePost({url:"/upload", config: formDataConfig} );

    //include uploading + reencoding
    const [bProcessing, setProcessing] = useState(false);
    const [strVideoPath, setVideoPath] = useState("");

    useEffect(() => {

        if(response)
        {
            const action = ACTION.FORMAT;
	        const actionParam = {"FORMAT": selectedFormat};

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

    wsClient.onmessage = message  => {
        const dataFromServer = JSON.parse(message.data);
        console.log('WS message! ', dataFromServer);

        if (dataFromServer.type === "reencodeResponse") 
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

        else if(dataFromServer.type === "reencodeProgress")
        {
            setCompletionPercent(dataFromServer["percent"]);
        }
    };

    const handleFormatChange = (event) => {
        setErrorText("");
        setSelectedFormat(event.target.value);

        if(selectedFile && event.target.value.toLowerCase() == GetFileExt(selectedFile.name, false).toLowerCase())
            setErrorText("file is already in selected file format");
    };

    const HandleFileChange = e => {
        
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
       
        let formData = new FormData();
        formData.append("video", selectedFile);
        formData.append("format", GetFileExt(selectedFile.name, true));
        makeRequest(formData);
    }

    const GetMenuItems = () => {
        return arrFormat.map(format => {
            let k = Object.keys(format)[0];
            let val = format[k];
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