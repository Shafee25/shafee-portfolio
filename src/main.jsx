import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      The App component now handles the ThemeProvider and Router internally.
      This main.jsx file's only job is to render the App.
    */}
    <App />
  </React.StrictMode>
);