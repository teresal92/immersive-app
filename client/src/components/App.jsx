import React, { useState, useEffect, useMemo } from 'react';
import Login from './Login.jsx';
import Search from './Search.jsx';
import PlaylistList from './PlaylistList.jsx';
import Rooms from './Rooms.jsx';
import roomsData from '../roomsData.js';
import Player from './Player.jsx';
import Dashboard from './Dashboard.jsx';

// MUI
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

const axios = require('axios');

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moods, setMoods] = useState(roomsData);
  const [playlists, setPlaylists] = useState([]);
  const [roomSelected, setRoomSelected] = useState(false);
  const [room, setRoom] = useState(null);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  useEffect(() => {
    axios.get('/spotify/user')
    .then(user => {
      setUser(user.data);

    })
    .then(() => setIsLoggedIn(true))
    .catch(err => console.error(`error: ${err}`))
  }, []);

  useEffect(() => {
    if (user) {
      // save username to db
      axios.post('/users', { username: user.display_name})
        .then((res) => console.log(`Successfully added to database! ${res}`))
        .catch(err => console.log(`Error posting authoriation token to users database! ${err.message}`));
    }
  }, [user]);

  const handleSelectRoom = (room) => {
    setRoomSelected(!roomSelected);
    if (room) {
      setRoom(room);
    }
  }

  const handleSearch = (query) => {
    axios.get(`/spotify/playlists/${query}`)
    .then(res => setPlaylists(res.data.playlists.items))
    .catch(err => console.log(err));
  }

  return isLoggedIn ? (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app">
          <header id="app-header">
              <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div id="app-logo"></div>
                <h1>immersive</h1>
              </span>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ marginRight: '10px' }}>
                  Hi, {user.display_name}
                </h3>
                <Avatar sx={{ width: 32, height: 32 }}>
                  {user.display_name.slice(0,1).toUpperCase()}
                </Avatar>
              </span>
          </header>
          { roomSelected ? (
            <Dashboard
              room={room}
              handleSearch={handleSearch}
              handleSelectRoom={handleSelectRoom}
              playlists={playlists}
            />
          ) : (
            <div className="home">
              <h2>Featured Rooms</h2>
              <Rooms
                moods={moods}
                handleSelectRoom={handleSelectRoom}
              />
              <Player />
            </div>
          ) }
      </div>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <header id="app-header" style={{ justifyContent: 'flex-start' }}>
          <div id="app-logo"></div>
          <h1>immersive</h1>
        </header>
        <Login />
      </div>
    </ThemeProvider>
  );
};