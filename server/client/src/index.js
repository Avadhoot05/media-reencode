import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WSContext from './contexts/WSContext';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WSContext>
        <App />
    </WSContext>
);

// reportWebVitals();
