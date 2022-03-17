const express = require('express');
const router = express.Router();
const spotifyApi = require('./spotify/index.js')

// spotify
router.route('/playlists/:query')
  .get((req, res) => {
    let query = req.params.query;
    spotifyApi.searchPlaylists(query)
    .then(data => res.json(data.body))
    .catch(err => res.status(400).send(err));
  })

router.route('/playlists/:id')
  .get((req, res) => {
    let { id } = req.params;
    console.log('id', req. params);
    spotifyApi.getPlaylistsTracks(id, {
        offset: 1,
        limit: 5,
        fields: 'items'
      })
    .then(data => res.send(data.body))
    .catch(err => res.status(400).send(`Something went wrong! ${err}`));
  })

router.route('/user')
  .get((req, res) => {
    spotifyApi.getMe()
    .then(data => res.json(data.body))
    .catch(err => console.log(err));
  })

module.exports = router;