import React, { useEffect, useState } from 'react'
import FileUpload from '../FileUpload'
import usePost from '../Hooks/usePost';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Box} from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select,FormHelperText  } from '@mui/material';


import { ACTION, GetFileExt, formDataConfig } from '../../constants';
import Result from '../Result';
import PageHeading from '../PageHeading';

function Resolution({wsClient}) {
    console.log("Resolution")
    const arrResolution = [{1: '320x240 (240p)'}, {2: '640x360 (360p)'}, {3: '640x480 (480p)'}, {4: '1280x720 (720p)'}, {5: '1920x1080 (1080p)'}];


    const [selectedResolution, setSelectedResolution] = useState("");
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
            const action = ACTION.RESOLUTION;
            let param;
            console.log("send ws", selectedResolution);
            
            if(selectedResolution === 1)
            {
                console.log("240p")
                param = {width: 320, height: 240};
            }
            else if(selectedResolution === 2)
            {
                console.log("360p")
                param = {width: 640, height: 360};
            }
            else if(selectedResolution === 3)
            {
                console.log("480p")
                param = {width: 640, height: 480};
            }
            else if(selectedResolution === 4)
            {
                console.log("720p")
                param = {width: 1280, height: 720};
            }
            else if(selectedResolution === 5)
            {
                console.log("180p")
                param = {width: 1920, height: 1080};
            }
             
            
	        let actionParam = {"RESOLUTION": param};
            console.log(actionParam);
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

    const handleResolutionChange = e => {
        setErrorText("");
        setSelectedResolution(e.target.value)
    };

    const HandleFileChange = e => {
        setErrorText("");
        setSelectedFile(e.target.files[0]);
    }

    const HandleFormSubmit = e => {
        console.log(selectedResolution);
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
        return arrResolution.map(res => {
            let k = Object.keys(res)[0];
            let val = res[k];
            return <MenuItem key={k} value={k}>{val}</MenuItem>
        });
    }

  return (
    <>
        {
            (bProcessing || strVideoPath.length !== 0) ? (
                <Result
                    percent = {completionPercent}
                    strVideoPath = {strVideoPath}
                    action = {ACTION.RESOLUTION}
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
                        heading="Video Resolution Reencoding"
                        description= "Change the video to desired resolutions, enhancing visual quality for an enhanced viewing experience."
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
                                <InputLabel id="format-label">Select Resolution</InputLabel>
                                <Select
                                    labelId="format-label"
                                    value={selectedResolution}
                                    onChange={handleResolutionChange}
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
                                disabled={strErrorText !== "" || selectedFile === null || selectedResolution === ""}
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

export default Resolution;