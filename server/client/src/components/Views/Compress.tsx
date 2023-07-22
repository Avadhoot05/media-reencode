import React, { useEffect, useState, ChangeEvent } from 'react';
import FileUpload from '../FileUpload';
import usePost from '../Hooks/usePost';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Box, Slider, Typography, Tooltip  } from '@mui/material';

import { ACTION, GetFileExt, formDataConfig } from '../../constants';
import Result from '../Result';
import PageHeading from '../PageHeading';

import { AiOutlineInfoCircle } from "react-icons/ai";

interface IWsMessage {
    data : string
}

function Compress({wsClient}) {
    const [compressValue, setCompressValue] = useState<number>(20);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [completionPercent, setCompletionPercent] = useState<number>(0);

    //include uploading + reencoding
    const [bProcessing, setProcessing] = useState<boolean>(false);
    const [strVideoPath, setVideoPath] = useState<string>("");

    const [response, error, loading, makeRequest] = usePost({url:"/upload", config: formDataConfig} );

    useEffect(() => {

        if(response)
        {
            const action : number = ACTION.COMPRESS;
	        const actionParam: {"COMPRESS_VAL": number} = {"COMPRESS_VAL": compressValue};

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

    const HandleSliderChange = (event, newValue: number) : void => {
        setCompressValue(newValue);
    };

    const HandleFileChange = (e : ChangeEvent<HTMLInputElement>): void  => {
        setSelectedFile(e.target.files[0]);
    }

    const HandleFormSubmit = e => {
        e.preventDefault();
        setVideoPath("");
        setCompletionPercent(0);
        setProcessing(true);
       
        let formData: FormData = new FormData();
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
                    action = {ACTION.COMPRESS}
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
                    heading="Compress Video"
                    description= "Reduce the video file sizes while maintaining quality, with adjustable compression strength."
                />
                    
                <form onSubmit={HandleFormSubmit}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FileUpload 
                            onChangeHandler={HandleFileChange}
                        />
                        <Box display="flex" flexDirection="column" alignItems="flex-start" style={{width: "100%", margin: "15px 0"}}>

                            <div style={{display: "flex"}}>
                                <Typography id="slider-label" variant="body1" fontWeight={500}>
                                    Compression strength: {compressValue}%
                                </Typography> 

                                <Tooltip title="Higher value indicates stronger compression, but potentially lower quality. The recommended compression strength is 20."  arrow>
                                    <Box><AiOutlineInfoCircle style={{cursor: 'pointer', marginLeft: '5px'}}/></Box>
                                </Tooltip>
                            </div>
                            <Slider
                                value={compressValue}
                                min={0}
                                max={100}
                                onChange={HandleSliderChange}
                                aria-labelledby="horizontal-slider"
                                valueLabelDisplay="auto"
                                />
                        </Box>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                            disabled={selectedFile === null}
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

export default Compress;