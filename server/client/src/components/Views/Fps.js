import React, { useEffect, useState } from 'react'
import FileUpload from '../FileUpload'
import usePost from '../Hooks/usePost';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, Box} from '@mui/material';

import { ACTION, GetFileExt, formDataConfig } from '../../constants';
import Result from '../Result';
import PageHeading from '../PageHeading';

function Fps({wsClient}) {

    const [fps, setFps] = useState('');
    const [strErrorText, setErrorText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [completionPercent, setCompletionPercent] = useState(0);
    
    const [response, error, loading, makeRequest] = usePost({url:"/upload", config: formDataConfig} );

    //include uploading + reencoding
    const [bProcessing, setProcessing] = useState(false);

    
    const [strVideoPath, setVideoPath] = useState("");

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

    useEffect(() => {

        if(response)
        {
            const action = ACTION.FPS;
	        const actionParam = {"FPS": fps};

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


    const HandleFpsChange = (event) => {
        setErrorText('');
        let fps = event.target.value;

        if (!/^[1-9]\d*$/.test(fps)) {
            setFps(fps);
            setErrorText('Please enter a positive number');
            return;
        }

        setFps(Math.min(240, fps));

    };

    const HandleFileChange = e => {
        setSelectedFile(e.target.files[0]);
    }

    const HandleFormSubmit = e => {
        e.preventDefault();
        setVideoPath("");
        setCompletionPercent(0);
        setProcessing(true);
       
        let formData = new FormData();
        formData.append('video', selectedFile);
        formData.append("format", GetFileExt(selectedFile.name, true));
        makeRequest(formData);
    }

    return (
        <>
        {
            (bProcessing || strVideoPath.length !== 0) ? (
                <Result
                    percent = {completionPercent}
                    strVideoPath = {strVideoPath}
                    action = {ACTION.FPS}
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
                    heading="Video FPS Reencoding"
                    description= "Reencode video files by adjusting the Frames Per Second (FPS) value."
                    />
                    
                <form onSubmit={HandleFormSubmit}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FileUpload 
                            onChangeHandler={HandleFileChange}
                        />
                        <TextField
                            type="number"
                            label="FPS"
                            variant="outlined"
                            required
                            style={{ width: '100%', margin: "15px 0" }}
                            value={fps}
                            onChange={HandleFpsChange}
                            error={!!strErrorText}
                            helperText={strErrorText}
                            inputProps={{
                                min: 1,
                            }}
                        />

                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                            disabled={strErrorText !== "" || selectedFile === null || fps === ""}
                        >
                            upload
                        </Button>
                    </Box>
                </form>
            </Box>
            ) 
        }

            

                             
            {/* {
                (videoPath.length > 0) && (
                    <video
                        preload="auto"
                        width="320"
                        height="240"
                        controls
                        >
                        <source src={`${BACKEND_URI}${videoPath}`} />
                        ;Your browser does not support the video tag.
                    </video>
                )
            } */}
        </>
  )
}

export default Fps;