import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './components/App.jsx';

ReactDOM.render(<App /> , document.getElementById('app'));
// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="dashboard" element={<Dashboard />} />
//     </Routes>
//   </BrowserRouter>
//   , document.getElementById('app'));