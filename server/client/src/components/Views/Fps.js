import React, { useEffect, useState } from 'react'
import UploadForm from '../UploadForm'
import usePost from '../Hooks/usePost';
import { BACKEND_URI, formDataConfig } from '../../constants';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Fps({wsClient}) {
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [response, error, loading, makeRequest] = usePost({url:"/upload", config: formDataConfig} );
    
    const [videoPath, setVideoPath] = useState("");

    wsClient.onmessage = message  => {
        const dataFromServer = JSON.parse(message.data);
        console.log('got reply! ', dataFromServer);

          if (dataFromServer.type === "reencodeResponse") {
            if(dataFromServer["bSuccess"])
            {
                setVideoPath(dataFromServer["strOutputFilePath"]);
            }
            else
            {
                setVideoPath("");
            }
        }
    };

    useEffect(() => {

        if(response)
        {
            let action = 1;
	        let actionParam = {"FPS": 20};

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


    const onChangeHandler = e => {
        
        setSelectedFile(e.target.files[0]);
    }

    const onSubmitHandler = e => {
        
        setVideoPath("");

        
        if(selectedFile == null)
        {
            console.log("show toast");
            toast.warn("No file selected");
            return;
        }
        let formData = new FormData() 
        formData.append('name', "demoname");
        formData.append('video', selectedFile);
        formData.append("format", ".mp4"); //to convert in
       
        makeRequest(formData);
    }

    return (

        <>
        
            <UploadForm 
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
            />

            {
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
            }
        </>
        
        
        
  )
}

export default Fps;