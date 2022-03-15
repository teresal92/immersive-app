import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import { useNavigate } from 'react-router';
// import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <App />
  // <Router>
  //   <Routes>
  //     <Route path='/' element={<ProductState><App /></ProductState>}/>
  //   </Routes>
  // </Router>
  ,
  document.getElementById('app'));