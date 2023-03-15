import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import our custom CSS
import './scss/styles.scss';
import 'bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);