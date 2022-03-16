import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './components/App.jsx';
import Dashboard from './components/Dashboard.jsx'

ReactDOM.render(<App /> , document.getElementById('app'));
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="dashboard" element={<Dashboard />} />
//     </Routes>
//   </BrowserRouter>
//   , document.getElementById('app'));