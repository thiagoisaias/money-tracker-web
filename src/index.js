import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import axios from 'axios';


axios.defaults.baseURL = 'https://api.example.com';



ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
