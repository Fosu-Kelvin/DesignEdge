import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/DesignEdge">
    <Routes>
      <Route path='/*'  element={<App/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);

