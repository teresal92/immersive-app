import React, { useState, useEffect } from 'react';
import PlaylistListEntry from './PlaylistListEntry.jsx';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px'
  }
})

function PlaylistList({playlists, handleSelectPlaylist}) {
  const classes = useStyles();
  return (
    <div>
      {playlists.length > 0 && <h4>Playlist Results</h4> }
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        className={classes.gridContainer}>
          {playlists.map((playlist, i) =>
            (<Grid key={i} item xs={12} sm={6} md={3}>
              <PlaylistListEntry
                playlist={playlist}
                handleSelectPlaylist={handleSelectPlaylist} />
            </Grid>)
          )}
      </Grid>
    </div>
  )
};

// function PlaylistList({playlists}) {
//   return (
//     <div className="playlist">
//       {playlists.length > 0 && <h4>Playlist Results</h4> }
//       <ul>
//         {playlists.map((playlist, i) => <PlaylistListEntry key={i} playlist={playlist} />)}
//       </ul>
//     </div>
//   )
// };

export default PlaylistList;