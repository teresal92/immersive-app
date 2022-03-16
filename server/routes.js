const express = require('express');
const router = express.Router();
const spotifyApi = require('./spotify/index.js')

// spotify
router.route('/playlists/:query')
  .get((req, res) => {
    let query = req.params.query;
    console.log('query: ', req.params);
    spotifyApi.searchPlaylists(query)
    .then(data => res.json(data.body))
    .catch(err => res.status(400).send(err));
  })

router.route('/user')
  .get((req, res) => {
    spotifyApi.getMe()
    .then(data => res.json(data.body))
    .catch(err => console.log(err));
  })

module.exports = router;