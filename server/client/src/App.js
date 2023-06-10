import './App.css';
import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Fps from './components/Views/Fps';
import Resolution from './components/Views/Resolution';
import SelectionNav from './components/Nav/SelectionNav';
import Format from './components/Views/Format';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Compress from './components/Views/Compress';
import Footer from './components/Footer';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {
	//ws
	useEffect(function()
  	{
		client.onopen = () => {
			console.log('WebSocket Client Connected');
		};
	}, []);
    
  return (
    <div className="App" >
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
		
		<Router basename="/">
			<Routes>
				<Route path="/" element={<SelectionNav/>}></Route>
				<Route path="/fps" element={<Fps wsClient = {client}/>}></Route>
				<Route path="/format" element={<Format wsClient = {client}/>}></Route>
				<Route path="/resolution" element={<Resolution wsClient = {client}/>}></Route>
				<Route path="/compress" element={<Compress wsClient = {client}/>}></Route>
			</Routes >
		
		<Footer/>
		</Router>
      
	  
    </div>
  );
}

export default App;
