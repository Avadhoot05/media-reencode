import './App.css';
import React, { lazy } from 'react';

import SelectionNav from './components/Nav/SelectionNav';
import { ToastContainer, Slide } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';

const Compress = lazy(() => import('./components/Views/Compress'));
const Resolution = lazy(() => import('./components/Views/Resolution'));
const Format = lazy(()=> import('./components/Views/Format'));
const Fps = lazy(() => import('./components/Views/Fps')); 


function App() {    
  return (
    <div className="App" >
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
					<Route path="/fps" element={<Fps/>}></Route>
					<Route path="/format" element={<Format/>}></Route>
					<Route path="/resolution" element={<Resolution/>}></Route>
					<Route path="/compress" element={<Compress/>}></Route>
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
