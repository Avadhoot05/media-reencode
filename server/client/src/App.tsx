import './App.css';
import React, { useEffect, lazy } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import SelectionNav from './components/Nav/SelectionNav';
import { ToastContainer, Slide } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import { wsUrl } from './utils';

const Compress = lazy(() => import('./components/Views/Compress'));
const Resolution = lazy(() => import('./components/Views/Resolution'));
const Format = lazy(()=> import('./components/Views/Format'));
const Fps = lazy(() => import('./components/Views/Fps')); 

const client = new W3CWebSocket(wsUrl);

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
            transition={Slide}
            draggable
            pauseOnHover
            theme="light"
            limit={3}
            closeButton={false}
        />
		<React.Suspense fallback={<FallbackLoading/>}>
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
			</React.Suspense>
    </div>
  );
}


function FallbackLoading() {
	return (
		<h2>Loading...</h2>
	)
}

export default App;
