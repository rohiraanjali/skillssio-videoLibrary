import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { VideoProvider } from './contexts/VideoContext';
import {AuthProvider} from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
      <AuthProvider>
    <Router >
    <App />
    </Router>
    </AuthProvider>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


