import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import Search from './Search.jsx';
import PlaylistList from './PlaylistList.jsx';

// import Dashboard from './Dashboard.jsx';
const axios = require('axios');

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState(null);

  // why doesn't automatically reload
  useEffect(() => {
    axios.get('/spotify/user')
    .then(user => {
      setUser(user.data);
      setIsLoggedIn(true);
    })
    .catch(err => console.error(`error: ${err}`))
  }, [])

  useEffect(() => {
    if (user) {
      // save username to db
      axios.post('/users', { username: user.display_name})
        .then((res) => console.log(`Successfully added to database! ${res}`))
        .catch(err => console.log(`Error posting authoriation token to users database! ${err.message}`));
    }
  }, [user])

  const handleSearch = (query) => {
    console.log('submit query! ', query);
    axios.get(`/spotify/playlists/${query}`)
    .then(res => setPlaylists(res.data.playlists.items))
    .catch(err => console.log(err));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>immersive</h1>
        <nav>
          {/* <img src={logo} alt="logo" height={200} width={200} /> */}
          <ul>
            {/* <Link to='/dashboard'>Dashboard</Link> */}
          </ul>
        </nav>
      </header>
      <div className="app-container">
        {!isLoggedIn ? <Login /> : (
          <div className="dashboard">
            <h1>Hi, {user.display_name}</h1>
            <Search handleSearch={handleSearch} />
            <PlaylistList playlists={playlists} />
            {/* Playlist Carousel */}
            {/* Timer */}
            {/* Music Player */}
          </div>
        )}
      </div>
    </div>
  );
}
export default App;