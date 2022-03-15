import React, { useState, useEffect } from 'react';
import Login from './Login.jsx';

const axios = require('axios');
import Dashboard from './Dashboard.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authCode, setAuthCode] = useState(null);

  useEffect(() => {
    // grab authorization code from url when redirected back to redirect uri
    // const code = new URLSearchParams(window.location.search).get('code');
    // console.log(`code: ${code}`);
    // save authentication code in database
    // if (code) {
    //   setAuthCode(code);
    //   axios.post('/users', {
    //     authCode: code
    //   })
    //     .then((res) => console.log(`Success! ${res}`))
    //     .catch(err => console.log(`Error posting authoriation token to users database! ${err.message}`));
    // }
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>immersive</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Dashboard</a>
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </header>
      {isLoggedIn ? <Dashboard code={authCode} /> : <Login />}
    </div>
  );
}

export default App;