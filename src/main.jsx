import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import our custom CSS
import './scss/styles.scss';
import 'bootstrap';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
