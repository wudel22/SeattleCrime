import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// non-static import: 
// https://data.seattle.gov/resource/tazs-3rd5.json?$select=report_datetime,mcpp,offense_parent_group,offense,longitude,latitude,offense_id&$order=report_datetime DESC&$limit=1000

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);