
import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { BACKEND_URI } from './constants';
import Fps from './components/Views/Fps';
import WSHandler from './components/WSHandler';
import { ToastContainer } from 'react-toastify';
const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [videoPath, setVideoPath] = useState("");

  
  
  const onChangeHandler = event => {

    // console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);

  }

	const OnUploadFailure = () => {
		alert("error");
	}

  const onClickHandler = event => {
    event.preventDefault();
    let data = new FormData() 
    data.append('name', "demoname");
    data.append('video', selectedFile);
    data.append("format", ".mp4"); //to convert in
	console.log(data.get('video'));

	//HARDCODED TO fps, change it later
	let action = 1;
	let actionParam = {"FPS": 20};
	setVideoPath("");
    axios.post("/upload", data, {
      headers: {
          'content-type': 'multipart/form-data'
      }
  })
    .then(res => {
		console.log(res);
		
		if(res.status == 200)
		{
			client.send(JSON.stringify({
				type: "enque",
				newUploadedFileName: res.data.newUploadedFileName, 
				uploadedFileFormat: res.data.uploadedFileFormat,
				action: action,
				actionParam: actionParam
			}));
		}
		else
		{
			OnUploadFailure();
		}
    })
    .catch(err => {
    	console.log(err);
		OnUploadFailure();
    }); 
}

	//ws
	useEffect(function()
  	{
		client.onopen = () => {
			console.log('WebSocket Client Connected');
		};
		
		client.onmessage = message  => {
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

	}, []);
    
  return (
    <div className="App">
		{/* <WSHandler/> */}
		<ToastContainer 
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            rtl={false}
            Transition="slide"
            draggable
            pauseOnHover
            theme="light"
            limit={3}
            closeButton={false}
        />
		
		<Fps 
			wsClient = {client}
		/>
      {/* <input type="file" name="file" onChange={onChangeHandler}/>
      <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>

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
	} */}
	  
    </div>
  );
}

export default App;
