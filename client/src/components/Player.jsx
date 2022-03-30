import React, {useState, useEffect} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const axios = require('axios');

export default function Player({ trackUri }) {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios.get('/token')
      .then(res => {
        setAccessToken(res.data)
      })
      .catch(err => console.log(err));
  });

  if (!accessToken) {
    return null;
  }

  return (
    <div className="music-player">
      <SpotifyPlayer
        token={accessToken}
        uris={trackUri ? trackUri : [`spotify:track:10oKSzRcwbZsog2uq2gb4b`]}
      />
    </div>
  );
};