import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import SEATTLE_CRIME from './data/crimeData.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App crimeData={SEATTLE_CRIME}/>
  </React.StrictMode>
);

