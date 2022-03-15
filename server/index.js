const express = require("express");
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const pool = require('../database')

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../client/dist');
const spotifyApi = require('./spotify');

app.use(express.static(DIST_DIR));
app.use(express.json());
app.use(express.urlencoded( {extended: true }));
app.use(cors());

// spotify oAuth auth code flow using spotify-web-api-node library
// https://www.npmjs.com/package/spotify-web-api-node#installation
const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];

app.get('/login', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get('/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error('Callback Error:', error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);
      console.log('access_token:', access_token);
      console.log('refresh_token:', refresh_token);

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
      res.send('Success! You can now close the window.');

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];

        console.log('The access token has been refreshed!');
        console.log('access_token:', access_token);
        spotifyApi.setAccessToken(access_token);
      }, expires_in / 2 * 1000);
    })
    .catch(error => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    })
    .then(() => axios.post('/users', { code }))
    .then((res) => console.log(`Success! ${res}`))
    .catch(err => console.log(`Error posting authoriation token to users database! ${err.message}`));
});

// save auth code to users table
app.post('/users', async (req, res) => {
  const { code } = req.body;
  const createdAt = Date.now();
  try {
    const text = `INSERT INTO users(authorization_code, created_at) VALUES ($1, $2);`
    const params = [code, createdAt];
    const result = await pool.query(text, params);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(`Error posting to users table: ${err.message}`);
  }
});

// Set Port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});