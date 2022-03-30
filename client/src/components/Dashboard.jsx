import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
import PlaylistList from './PlaylistList.jsx';
import Player from './Player.jsx';
import Pomodoro from './Pomodoro.jsx';

/* MUI */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const axios = require('axios');

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginLeft: 30,
    marginTop: 10,
  }
})

export default function Dashboard({
  playlist,
  room,
  handleSearch,
  handleSelectRoom,
  playlists
}) {
  const classes = useStyles();
  const [accessToken, setAccessToken] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [trackUri, setTrackUri] = useState(null);

  useEffect(() => {
    axios.get('/token')
      .then(res => {
        setAccessToken(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  if (!accessToken) {
    console.log('access token not valid');
  }

  const handleSelectPlaylist = (e, id) => {
    setSelectedPlaylist(id);
    console.log('sending id!', id)
    axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => res.data.items)
    .then(items => items.map((item, i) => item.track))
    .then(items => {
      setTracks(items);
      setTrackUri(items[0].uri);
    })
    .catch(err => console.error(`error fetching playlist tracks: ${err}`));
  };

  return (
    <>
      <div className="dashboard" style={{ backgroundImage: `url(${room.img_url})`}}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          className={classes.button}
          onClick={handleSelectRoom}
        >
          Home
        </Button>
        <h1 style={{ fontSize: '90px', margin: '0 30px'}}>{room.name}</h1>
        <Search
          handleSearch={handleSearch}
        />
        <div className="dashboard-main">
          <PlaylistList
            playlists={playlists}
            handleSelectPlaylist={handleSelectPlaylist}
          />
          <Pomodoro />
        </div>
      </div>
      <Player trackUri={trackUri} />
    </>
  );
};