import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { VideoProvider } from './contexts/VideoContext';

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
    <Router >
    <App />
    </Router>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


